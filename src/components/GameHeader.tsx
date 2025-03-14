import { Text } from "@/components/ui/Text";
import StatusAlert from "./StatusAlert";
import { WordStatus } from "../hooks/useWordGame";

interface GameHeaderProps {
  isLoading: boolean;
  status: WordStatus;
}

const GameHeader = ({ isLoading, status }: GameHeaderProps) => {
  return (
    <>
      {/* Fixed height status message container */}
      <div className="h-6 mb-8 flex items-center justify-center">
        <StatusAlert isLoading={isLoading} status={status} />
      </div>
    </>
  );
};

export default GameHeader; 