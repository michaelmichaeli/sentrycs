import { memo } from 'react';
import { Button } from "@/components/ui/Button";

export interface KeyButtonProps {
  char: string;
  onClick: (char: string) => void;
  disabled: boolean;
  color: string;
}

const KeyButton = memo(({ char, onClick, disabled, color }: KeyButtonProps) => (
  <div className="flex-1 min-w-0 h-full">
    <Button
      className={`w-full h-full text-xs text-white font-bold shadow-md ${color}`}
      onClick={() => onClick(char)}
      disabled={disabled}
      variant="default"
    >
      {char}
    </Button>
  </div>
));

KeyButton.displayName = 'KeyButton';

export default KeyButton; 