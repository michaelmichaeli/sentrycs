import { Alert } from "@/components/ui/Alert";
import { StatusAlertProps, WordStatus } from "@/types";

const StatusAlert = ({ isLoading, status }: StatusAlertProps) => {
  if (isLoading) {
    return (
      <Alert variant="default" className="text-blue-600 font-medium">
        Checking if this word exists...
      </Alert>
    );
  } else if (status === WordStatus.VALID) {
    return (
      <Alert status="success" className="text-green-600 font-medium">
        Great job! That's a valid word.
      </Alert>
    );
  } else if (status === WordStatus.INVALID) {
    return (
      <Alert status="error" className="text-red-600 font-medium">
        Sorry, that's not a valid word. Try again!
      </Alert>
    );
  }
  return null;
};

export default StatusAlert; 