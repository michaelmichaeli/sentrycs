import { Component, ReactNode, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { ErrorBoundaryProps, ErrorBoundaryState, ErrorDialogProps } from "@/types";
import { ErrorInfo } from "react";

// Create a global error handler that can be accessed from anywhere
class ErrorHandler {
	private static instance: ErrorHandler;
	private errorBoundaryComponent: ErrorBoundary | null = null;

	private constructor() {}

	public static getInstance(): ErrorHandler {
		if (!ErrorHandler.instance) {
			ErrorHandler.instance = new ErrorHandler();
		}
		return ErrorHandler.instance;
	}

	public setErrorBoundary(component: ErrorBoundary): void {
		this.errorBoundaryComponent = component;
	}

	public handleError(error: Error): void {
		if (this.errorBoundaryComponent) {
			this.errorBoundaryComponent.handleError(error);
		} else {
			console.error("No ErrorBoundary registered to handle error:", error);
		}
	}
}

// Export the singleton instance
export const globalErrorHandler = ErrorHandler.getInstance();

// Custom Error Dialog component that matches the screenshot exactly
const ErrorDialog = ({
	error,
	open,
	onClose,
}: ErrorDialogProps) => {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div className="fixed inset-0 bg-black/50" onClick={onClose} />

			{/* Dialog */}
			<div className="bg-white relative z-10 w-[450px] shadow-lg overflow-hidden">
				{/* Red header */}
				<div className="bg-red-100 border-t-4 border-red-500 flex items-center justify-between p-3">
					<h2 className="text-red-700 text-xl font-bold">
						Something went wrong
					</h2>

					{/* X button with correct project styling */}
					<button
						className="w-8 h-8 flex items-center justify-center font-head transition-all outline-none border-2 border-black shadow-md hover:shadow-xs bg-white"
						onClick={onClose}
					>
						<FiX size={20} className="text-red-500" />
					</button>
				</div>

				{/* Content */}
				<div className="p-4">
					<p className="text-red-600 mb-4">
						The application encountered an error but is still running.
					</p>

					{error && (
						<div className="mb-4">
							<p className="text-red-700 font-bold mb-1">Error:</p>
							<div className="border border-red-200 rounded p-3 bg-white">
								<p className="text-red-800 text-sm">{error.toString()}</p>
							</div>
						</div>
					)}

					<div className="flex justify-end mt-4">
						<button
							onClick={onClose}
							className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-head transition-all outline-none border-2 border-black shadow-md hover:shadow-xs"
						>
							Try Again
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null,
		};

		// Register this component with the global error handler
		globalErrorHandler.setErrorBoundary(this);
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Log the error to the console
		console.error("Error caught by ErrorBoundary:", error, errorInfo);
		this.setState({ errorInfo });
	}

	// Method to handle errors in event handlers and async code
	handleError = (error: Error) => {
		this.setState({
			hasError: true,
			error,
		});
	};

	// Method to reset the error state
	resetError = () => {
		this.setState({
			hasError: false,
			error: null,
			errorInfo: null,
		});
	};

	render() {
		return (
			<>
				{this.props.children}
				<ErrorDialog
					error={this.state.error}
					open={this.state.hasError}
					onClose={this.resetError}
				/>
			</>
		);
	}
}

// Simple hook to access the global error handler
export const useErrorHandler = () => {
	return (error: Error) => {
		globalErrorHandler.handleError(error);
	};
};

// Create a wrapper for action handlers that catches errors
export const withErrorHandling = <T extends (...args: any[]) => any>(
	fn: T
): T => {
	return ((...args: Parameters<T>): ReturnType<T> => {
		try {
			return fn(...args);
		} catch (error) {
			globalErrorHandler.handleError(
				error instanceof Error ? error : new Error(String(error))
			);
			throw error; // Re-throw to maintain original behavior
		}
	}) as T;
};

// Hook to set up global error handlers in a React-friendly way
export const useGlobalErrorHandlers = () => {
	useEffect(() => {
		// Set up handlers for window errors and unhandled promise rejections
		const handleWindowError = (event: ErrorEvent) => {
			event.preventDefault();
			globalErrorHandler.handleError(event.error || new Error(event.message));
			return false;
		};

		const handlePromiseRejection = (event: PromiseRejectionEvent) => {
			event.preventDefault();
			const error =
				event.reason instanceof Error
					? event.reason
					: new Error(String(event.reason));
			globalErrorHandler.handleError(error);
		};

		// Add event listeners
		window.addEventListener("error", handleWindowError);
		window.addEventListener("unhandledrejection", handlePromiseRejection);

		// Clean up when component unmounts
		return () => {
			window.removeEventListener("error", handleWindowError);
			window.removeEventListener("unhandledrejection", handlePromiseRejection);
		};
	}, []);
};

// Create a provider component that's simpler and doesn't modify the component tree
export const ErrorBoundaryProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	// Set up global error handlers
	useGlobalErrorHandlers();

	return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ErrorBoundary;
