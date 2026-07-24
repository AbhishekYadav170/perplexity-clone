import { Bell, Sparkles, Search } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .45 }}
      className="sticky top-0 z-20 flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl"
    >
      {/* Left */}

      <div>

        <h1 className="text-2xl font-bold text-white">
          Ask Anything
        </h1>

        <div className="mt-1 flex items-center gap-2">

          <Sparkles
            className="text-cyan-400"
            size={16}
          />

          <p className="text-sm text-gray-400">
            AI is ready
          </p>

        </div>

      </div>

      {/* Center */}

      <div className="hidden lg:flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 w-96">

        <Search
          size={18}
          className="text-gray-500"
        />

        <input
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">

          <Bell size={20} />

        </button>

        <div className="flex items-center gap-3">

          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700" />

          <div>

            <h3 className="font-semibold text-white">
              Abhishek
            </h3>

            <p className="text-xs text-gray-400">
              Premium
            </p>

          </div>

        </div>

      </div>

    </motion.header>
  );
};

export default Header;