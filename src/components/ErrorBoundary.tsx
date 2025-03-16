import { Component, ReactNode, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { ErrorBoundaryProps, ErrorBoundaryState, ErrorDialogProps } from "@/types";
import { ErrorInfo } from "react";

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

export const globalErrorHandler = ErrorHandler.getInstance();

const ErrorDialog = ({
	error,
	open,
	onClose,
}: ErrorDialogProps) => {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="fixed inset-0 bg-black/50" onClick={onClose} />

			<div className="bg-white relative z-10 w-[450px] shadow-lg overflow-hidden">
				<div className="bg-red-100 border-t-4 border-red-500 flex items-center justify-between p-3">
					<h2 className="text-red-700 text-xl font-bold">
						Something went wrong
					</h2>

					<button
						className="w-8 h-8 flex items-center justify-center font-head transition-all outline-none border-2 border-black shadow-md hover:shadow-xs bg-white"
						onClick={onClose}
					>
						<FiX size={20} className="text-red-500" />
					</button>
				</div>

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

		globalErrorHandler.setErrorBoundary(this);
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Error caught by ErrorBoundary:", error, errorInfo);
		this.setState({ errorInfo });
	}

	handleError = (error: Error) => {
		this.setState({
			hasError: true,
			error,
		});
	};

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

export const useErrorHandler = () => {
	return (error: Error) => {
		globalErrorHandler.handleError(error);
	};
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withErrorHandling = <T extends (...args: any[]) => any>(
	fn: T
): T => {
	return ((...args: Parameters<T>): ReturnType<T> => {
		try {
			return fn(...args);
		} catch (error) {
			globalErrorHandler.handleError(error instanceof Error ? error : new Error(String(error)));
			return undefined as unknown as ReturnType<T>;
		}
	}) as T;
};

export const useGlobalErrorHandlers = () => {
	useEffect(() => {
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

		window.addEventListener("error", handleWindowError);
		window.addEventListener("unhandledrejection", handlePromiseRejection);

		return () => {
			window.removeEventListener("error", handleWindowError);
			window.removeEventListener("unhandledrejection", handlePromiseRejection);
		};
	}, []);
};

export const ErrorBoundaryProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	useGlobalErrorHandlers();

	return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ErrorBoundary;
