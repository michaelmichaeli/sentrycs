import { useState, useMemo } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { Text } from "@/components/ui/Text";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";

interface HelpPanelProps {
  wordLength: number;
}

const HelpPanel = ({ wordLength }: HelpPanelProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | undefined>(undefined);

  // Generate a random background color for the How-to-Play section
  const helpPanelBgColor = useMemo(() => {
    const colors = [
      'bg-pink-400',
      'bg-purple-400',
      'bg-blue-400',
      'bg-cyan-400',
      'bg-teal-400',
      'bg-green-400',
      'bg-yellow-400',
      'bg-orange-400',
      'bg-red-400',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

  return (
    <div className="fixed top-21 right-4 z-50">
      <Card className={`p-4 shadow-md w-64 border-2 border-black ${helpPanelBgColor} text-white transition-all duration-300 ease-in-out`}>
        <div className="flex gap-4 items-center mb-4 ">
          <FiHelpCircle color="black" />
          <Text className="text-black text-md font-head font-semibold">
            How to Play
          </Text>
        </div>
        <Accordion 
          type="single" 
          collapsible
          value={openAccordion}
          onValueChange={setOpenAccordion}
        >
          <Accordion.Item value="instructions">
            <Accordion.Header className="text-sm text-black">
              Instructions
            </Accordion.Header>
            <Accordion.Content>
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>
                  Enter a {wordLength}-letter English word using the keyboard
                  below
                </li>
                <li>
                  Press <span className="font-semibold">ENTER</span> to check if
                  your word exists in the dictionary
                </li>
                <li>If the word is valid, the border will turn green</li>
                <li>If the word is invalid, the border will turn red</li>
                <li>
                  Use the <span className="font-semibold">Backspace</span>{" "}
                  button to delete letters
                </li>
                <li>
                  Press <span className="font-semibold">Reset Game</span> to
                  start over
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </Card>
    </div>
  );
};

export default HelpPanel; 