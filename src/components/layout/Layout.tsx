import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundDecorations from "./BackgroundDecorations";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen relative bg-transparent">
			<BackgroundDecorations />
			<Header />
			<main className="flex-grow container mx-auto px-4 py-8 relative">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
