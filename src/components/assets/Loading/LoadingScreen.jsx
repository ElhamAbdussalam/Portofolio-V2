// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const count = useMotionValue(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3, // total time (in seconds)
      ease: "easeInOut",
      onUpdate: (latest) => {
        setProgress(Math.round(latest));
      },
    });

    return () => controls.stop(); // clean up on unmount
  }, [count]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
    >
      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-[#FAB007] rounded-full mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Loading Progress */}
      <motion.p className="text-white text-2xl font-semibold tracking-wide">
        Loading {progress}%
      </motion.p>
    </motion.div>
  );
}
