import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative">
        <div className="text-8xl font-bold gradient-text animate-glow-pulse">
          NO
        </div>
        <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift bg-[length:200%_200%]"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
