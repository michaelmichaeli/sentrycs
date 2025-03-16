import { useMemo } from "react";
import { FiX } from "react-icons/fi";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HelpPanelProps } from "@/types";

const HelpPanel = ({ wordLength, isOpen, onClose }: HelpPanelProps) => {
  // Generate a random background color for the How-to-Play section
  const helpPanelBgColor = useMemo(() => {
    const colors = [
      'bg-primary-300',
      'bg-primary-400',
      'bg-primary-500',
      'bg-primary-600',
      'bg-primary-700',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

  const InstructionsList = () => (
    <ul className="list-disc pl-5 space-y-2 text-left text-sm md:text-base text-black">
      <li className="py-1">
        Enter a {wordLength}-letter English word using the keyboard
        below
      </li>
      <li className="py-1">
        Press <span className="font-semibold">ENTER</span> to check if
        your word exists in the dictionary
      </li>
      <li className="py-1">
        If the word is valid, the border will turn green
      </li>
      <li className="py-1">
        If the word is invalid, the border will turn red
      </li>
      <li className="py-1">
        Use the <span className="font-semibold">Backspace</span>{" "}
        button to delete letters
      </li>
      <li className="py-1">
        Press <span className="font-semibold">Reset Game</span> to
        start over
      </li>
    </ul>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog Content */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg">
        <Card className="border-2 border-black shadow-lg">
          {/* Header */}
          <div className={`flex items-center justify-between p-4 ${helpPanelBgColor} border-b-2 border-black`}>
            <Text className="text-black font-head font-semibold">
              How to Play
            </Text>
            <Button
              variant="outline"
              className="p-1"
              onClick={onClose}
            >
              <FiX size={20} />
            </Button>
          </div>
          
          {/* Content */}
          <div className="p-4 bg-white">
            <InstructionsList />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HelpPanel; 