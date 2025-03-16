import StatusAlert from "./StatusAlert";
import { GameHeaderProps } from "@/types";

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