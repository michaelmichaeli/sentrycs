import { useMemo } from "react";
import { 
  FiX, 
  FiType, 
  FiCornerDownLeft, 
  FiCheck, 
  FiX as FiXMark, 
  FiDelete, 
  FiRefreshCw 
} from "react-icons/fi";
import { Text } from "@/components/ui/Text";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle 
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { HelpPanelProps } from "@/types";

const HelpPanel = ({ wordLength, isOpen, onClose }: HelpPanelProps) => {
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
    <ul className="space-y-3 text-left text-sm md:text-base text-black">
      <li className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary-300 rounded-full mt-0.5">
          <FiType size={14} className="text-black" />
        </div>
        <span>
          Enter a {wordLength}-letter English word using the keyboard below
        </span>
      </li>
      
      <li className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary-400 rounded-full mt-0.5">
          <FiCornerDownLeft size={14} className="text-black" />
        </div>
        <span>
          Press <span className="font-semibold">ENTER</span> to check if your word exists in the dictionary
        </span>
      </li>
      
      <li className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-400 rounded-full mt-0.5">
          <FiCheck size={14} className="text-black" />
        </div>
        <span>
          If the word is valid, the border will turn green
        </span>
      </li>
      
      <li className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-400 rounded-full mt-0.5">
          <FiXMark size={14} className="text-black" />
        </div>
        <span>
          If the word is invalid, the border will turn red
        </span>
      </li>
      
      <li className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary-600 rounded-full mt-0.5">
          <FiDelete size={14} className="text-black" />
        </div>
        <span>
          Use the <span className="font-semibold">Backspace</span> button to delete letters
        </span>
      </li>
      
      <li className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full mt-0.5">
          <FiRefreshCw size={14} className="text-black" />
        </div>
        <span>
          Press <span className="font-semibold">Reset Game</span> to start over
        </span>
      </li>
    </ul>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 border-2 border-black shadow-lg" hideCloseButton>
        <div className={`flex items-center justify-between p-4 ${helpPanelBgColor} border-b-2 border-black`}>
          <DialogTitle asChild>
            <Text className="text-black font-head font-semibold">
              How to Play
            </Text>
          </DialogTitle>
          <Button
            variant="outline"
            size="sm"
            className="p-1"
            onClick={onClose}
          >
            <FiX size={20} />
          </Button>
        </div>
        
        <div className="p-4 bg-white">
          <InstructionsList />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpPanel; 