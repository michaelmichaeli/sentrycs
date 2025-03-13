import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  onHelpClick: () => void;
}

const Layout = ({ children, onHelpClick }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onHelpClick={onHelpClick} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 