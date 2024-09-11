"use client";
import { ConfettiButton } from "./confetti";

const ConfettiButtonWrapper = () => {
  return (
    <ConfettiButton
      options={{
        get angle() {
          return Math.random() * 180; // Random angle for confetti
        },
      }}
      className="relative z-10 mt-20"
    >
      Celebrate 🎉
    </ConfettiButton>
  );
};

export default ConfettiButtonWrapper;