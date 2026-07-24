import { motion } from "framer-motion";

const blobs = [
  {
    size: 450,
    top: "-120px",
    left: "-80px",
    color: "from-blue-600/25 to-cyan-400/10",
    duration: 18,
  },
  {
    size: 380,
    bottom: "-100px",
    right: "-60px",
    color: "from-cyan-500/20 to-indigo-500/10",
    duration: 22,
  },
  {
    size: 260,
    top: "40%",
    left: "55%",
    color: "from-sky-400/15 to-blue-700/5",
    duration: 14,
  },
];

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -35, 20, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: blob.duration,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${blob.color} blur-[110px]`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        />
      ))}

    </div>
  );
}