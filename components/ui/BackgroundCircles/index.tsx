import { motion } from "framer-motion";

type BackgroundCirclesProps = {
  positionClass?: string;
};

const BackgroundCircles = ({ positionClass = "" }: BackgroundCirclesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        scale: [1, 1.25, 1.25, 1.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className={`absolute md:flex hidden justify-center items-center z-1 ${positionClass}`}
    >
      <div className="absolute border-[2px] border-amber-400/75 rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute border border-amber-400/75 rounded-full h-[300px] w-[300px]" />
      <div className="absolute border border-gray-400/75 rounded-full h-[500px] w-[500px]" />
      <div className="absolute border-[2px] border-amber-400/75 rounded-full h-[650px] w-[650px] animate-pulse" />
      <div className="absolute border border-gray-400/75 rounded-full h-[800px] w-[800px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
