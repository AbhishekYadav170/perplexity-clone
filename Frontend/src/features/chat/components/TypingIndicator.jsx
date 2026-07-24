import { motion } from "framer-motion";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="glass rounded-3xl px-5 py-4">

        <div className="flex items-center gap-2">

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-2.5 w-2.5 rounded-full bg-cyan-400"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.7,
                delay: i * 0.2,
              }}
            />
          ))}

        </div>

        <p className="mt-3 text-sm text-gray-400">
          AI is thinking...
        </p>

      </div>
    </div>
  );
};

export default TypingIndicator;