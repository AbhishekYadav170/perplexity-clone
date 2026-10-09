// import { Bell, Sparkles, Search } from "lucide-react";
// import { motion } from "framer-motion";

// const Header = ({searchQuery, setSearchQuery,

// }) => {
//   return (
//     <motion.header
//       initial={{ y: -25, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: .45 }}
//       className="sticky top-0 z-20 flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl"
//     >
//       {/* Left */}

//       <div>

//         <h1 className="text-2xl font-bold text-white">
//           Ask Anything
//         </h1>

//         <div className="mt-1 flex items-center gap-2">

//           <Sparkles
//             className="text-cyan-400"
//             size={16}
//           />

//           <p className="text-sm text-gray-400">
//             AI is ready
//           </p>

//         </div>

//       </div>

//       {/* Center */}

//       <div className="hidden lg:flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 w-96">

//         <Search
//           size={18}
//           className="text-gray-500"
//         />

//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search..."
//           className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
//         />

//       </div>

//       {/* Right */}

//       <div className="flex items-center gap-4">

//         <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">

//           <Bell size={20} />

//         </button>

//         <div className="flex items-center gap-3">

//           <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700" />

//           <div>

//             <h3 className="font-semibold text-white">
//               Abhishek
//             </h3>

//             <p className="text-xs text-gray-400">
//               Premium
//             </p>

//           </div>

//         </div>

//       </div>

//     </motion.header>
//   );
// };

// export default Header;



import { Bell, Sparkles, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";

const Header = ({ searchQuery, setSearchQuery, onMenuClick }) => {
  return (
    <motion.header
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative z-20 flex min-h-16 w-full min-w-0 items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-xl sm:px-4 lg:h-20 lg:px-6"
    >
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open chat history"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 xl:hidden"
        >
          <Menu size={23} />
        </button>

        <div className="min-w-0">
          <h1 className="truncate text-lg font-bold text-white sm:text-2xl">
            Ask Anything
          </h1>

          <div className="mt-1 flex items-center gap-1.5">
            <Sparkles className="shrink-0 text-cyan-400" size={15} />
            <p className="truncate text-xs text-gray-400 sm:text-sm">
              AI is ready
            </p>
          </div>
        </div>
      </div>

      <div className="hidden w-64 min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 lg:flex xl:w-80">
        <Search size={18} className="shrink-0 text-gray-500" />

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          aria-label="Search"
          className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-gray-500"
        />
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 sm:h-11 sm:w-11"
        >
          <Bell size={19} />
        </button>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 sm:h-11 sm:w-11" />

          <div className="hidden min-w-0 sm:block">
            <h3 className="max-w-28 truncate text-sm font-semibold text-white lg:text-base">
              Abhishek
            </h3>
            <p className="text-xs text-gray-400">Premium</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
