import { EventSystemSection } from "@/components/about/EventSystemSection";
import { TechStackSection } from "@/components/about/TechStackSection";
import { KeyFeaturesSection } from "@/components/about/KeyFeaturesSection";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { FiArrowLeft } from "react-icons/fi";
import { AboutProps } from "@/types";

const About = ({ }: AboutProps) => {
  return (
    <div className="flex justify-center px-2 sm:px-4">
      <div className="w-full max-w-3xl space-y-6">
        <Text as="h1" className="text-3xl font-bold text-black text-center">About Word Game</Text>
        <EventSystemSection />
        <TechStackSection />
        <KeyFeaturesSection />
        
        <div className="flex justify-center mt-8 w-full">
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <FiArrowLeft size={20} />
            Back to Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About; 