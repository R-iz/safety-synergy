
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

const SOSButton = () => {
  const [isActive, setIsActive] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isActive) {
      toast({
        title: "SOS Alert Activated",
        description: "Emergency contacts are being notified.",
        variant: "destructive",
      });
    }
  }, [isActive, toast]);

  const handleSOS = () => {
    setIsActive(true);
    // In a real implementation, this would trigger the alert system
    setTimeout(() => setIsActive(false), 5000);
  };

  return (
    <div className="relative">
      <Button
        variant="destructive"
        size="lg"
        className={`w-32 h-32 rounded-full relative overflow-hidden ${
          isActive ? "animate-pulse" : ""
        }`}
        onClick={handleSOS}
      >
        {isActive && (
          <>
            <span className="ripple animate-ripple" />
            <span className="ripple animate-ripple delay-300" />
            <span className="ripple animate-ripple delay-600" />
          </>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <AlertCircle className="w-12 h-12" />
        </div>
      </Button>
      <p className="text-center mt-4 font-medium">
        {isActive ? "Sending Alert..." : "SOS Emergency"}
      </p>
    </div>
  );
};

export default SOSButton;
