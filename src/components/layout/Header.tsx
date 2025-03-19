import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { FiHelpCircle, FiHome, FiInfo } from "react-icons/fi";
import logo from "@/assets/logo.svg";
import { WORD_LENGTH } from "@/constants/game";
import HelpPanel from "../HelpPanel";
import { cn } from "@/design/utils";
import { navLinkVariants, navLinkInnerVariants } from "@/design/components";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isHelpOpen, setIsHelpOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header className="sticky top-0 z-50 bg-primary text-black shadow-md">
				<div className="container mx-auto px-4 py-3">
					<div className="flex justify-between items-center">
						<Link to="/" className="flex items-center">
							<img src={logo} alt="Word Game" className="h-12 w-auto" />
						</Link>

						<div className="flex items-center gap-4">
							<nav className="hidden md:flex space-x-4">
								<Link
									to="/"
									className={navLinkVariants()}
								>
									<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
									<span className={navLinkInnerVariants()}>
										<FiHome size={20} />
										<span>Home</span>
									</span>
								</Link>
								<Link
									to="/about"
									className={navLinkVariants()}
								>
									<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
									<span className={navLinkInnerVariants()}>
										<FiInfo size={20} />
										<span>About</span>
									</span>
								</Link>
							</nav>

							<Button
								variant="outline"
								size="md"
								className="flex items-center gap-2 border-2 border-black"
								onClick={() => setIsHelpOpen(true)}
							>
								<FiHelpCircle className="text-black" size={20} />
								<span className="hidden md:inline">How to Play</span>
							</Button>

							<button
								className="md:hidden p-2 rounded focus:outline-none border-2 border-black"
								onClick={toggleMenu}
								aria-label="Toggle menu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{isMenuOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>
					</div>

					{isMenuOpen && (
						<nav className="md:hidden mt-3 pb-2 space-y-2">
							<Link
								to="/"
								className={cn(navLinkInnerVariants({ mobile: true }))}
								onClick={() => setIsMenuOpen(false)}
							>
								<FiHome size={20} />
								<span>Home</span>
							</Link>
							<Link
								to="/about"
								className={cn(navLinkInnerVariants({ mobile: true }))}
								onClick={() => setIsMenuOpen(false)}
							>
								<FiInfo size={20} />
								<span>About</span>
							</Link>
						</nav>
					)}
				</div>
			</header>
			<HelpPanel
				wordLength={WORD_LENGTH}
				isOpen={isHelpOpen}
				onClose={() => setIsHelpOpen(false)}
			/>
		</>
	);
};

export default Header;
