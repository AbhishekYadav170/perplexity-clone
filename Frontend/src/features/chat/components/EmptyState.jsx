import { motion } from "framer-motion";
import { Sparkles, Globe, FileText, Mic } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-blue-500/30"
      >
        <Sparkles size={42} className="text-white" />
      </motion.div>

      <h1 className="text-5xl font-bold text-white">
        Perplexity AI
      </h1>

      <p className="mt-4 max-w-xl text-lg text-gray-400">
        Ask anything, search the web, write code, summarize documents,
        and get intelligent answers instantly.
      </p>

      <div className="mt-10 flex gap-4">

        <div className="glass flex items-center gap-2 rounded-xl px-4 py-3">
          <Globe size={18} />
          <span>Search</span>
        </div>

        <div className="glass flex items-center gap-2 rounded-xl px-4 py-3">
          <FileText size={18} />
          <span>PDF</span>
        </div>

        <div className="glass flex items-center gap-2 rounded-xl px-4 py-3">
          <Mic size={18} />
          <span>Voice</span>
        </div>

      </div>

    </div>
  );
};

export default EmptyState;