// import {
//   Plus,
//   Search,
//   Settings,
//   User,
//   MessageSquare,
//   Trash2,
//   Pencil,
// } from "lucide-react";

// import { motion } from "framer-motion";
// import { useState } from "react";



// const Sidebar = ({ chats, currentChatId, openChat,  handleDeleteChat, handleRenameChat, handleNewChat, searchQuery,
//   setSearchQuery, setShowSettings,  setShowProfile, }) => {

//   const [editingId, setEditingId] = useState(null);
//   const [editingTitle, setEditingTitle] = useState("");

  
//   return (
//     <aside className="hidden md:flex h-full w-72 shrink-0 flex-col rounded-3xl border border-white/10 bg-[#080b12]">

//       {/* Logo */}
//       <div className="border-b border-white/10 p-5">
//         <h1 className="text-3xl font-bold tracking-tight text-white">
//           Perplexity
//         </h1>
//       </div>

//       {/* New Chat */}
//       <div className="p-4">
//         <motion.button
//              onClick={handleNewChat}
//              whileHover={{ scale: 1.03 }}
//              whileTap={{ scale: 0.98 }}
//              className="
//                 flex
//                 w-full
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-2xl
//                 bg-gradient-to-r
//                from-blue-600
//                to-cyan-500
//                py-3
//                font-semibold
//               text-white
//               shadow-lg
//                 shadow-blue-500/20
//                 transition
//             "
//         >
          
//            <Plus size={18} />     
//               New Chat
//         </motion.button>
//       </div>

//       {/* Search */}
//       <div className="px-4">
//         <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
//           <Search size={18} className="text-gray-400" />

//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search chats..."
//             className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-500"
//           />
//         </div>
//       </div>

//       {/* Chat History */}
//       <div className=" sidebar-scroll mt-5 flex-1 overflow-y-auto px-4">

//            <p className="mb-3 text-xs uppercase tracking-wider text-gray-500">
//              Chats
//           </p>

//           <div className="space-y-2"> 
//             {Object.values(chats)
//               .filter((chat) =>
//                  chat.title.toLowerCase().includes(searchQuery.toLowerCase())
                
//               )
//               .map((chat) => (
//                <motion.div
//                     key={chat.id}
//                     whileHover={{ x: 6 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => openChat(chat.id)}
//                     className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all duration-300
//                       ${
//                           currentChatId === chat.id
//                              ? "bg-gradient-to-r from-blue-600/90 to-cyan-500/80 text-white shadow-lg shadow-blue-500/20"
//                              : "glass text-gray-300 hover:bg-white/10"
//                       }`}
//               >
               

//                   <MessageSquare size={18} className="shrink-0" />

//                   {editingId === chat.id ? (
//                     <input
//                         autoFocus
//                          value={editingTitle}
//                         onClick={(e) => e.stopPropagation()}
//                         onChange={(e) => setEditingTitle(e.target.value)}
//                          onKeyDown={(e) => {
//                             if (e.key === "Enter") {
//                                   if (editingTitle.trim()) {
//                                       handleRenameChat(chat.id, editingTitle.trim());
//                                   }
//                                   setEditingId(null);
//                             }

//                             if (e.key === "Escape") {
//                                  setEditingId(null);
//                             }
//                           }}
//                           onBlur={() => setEditingId(null)}
//                           className="flex-1 rounded-lg border border-blue-500/30 bg-black/30 px-2 py-1 text-sm text-white outline-none"
//                     />
//                   ) : (
//                     <span className="flex-1 truncate">
//                         {chat.title}
//                     </span>
//                   )}

//                   <button
//                       onClick={(e) => {
//                          e.stopPropagation();

//                          setEditingId(chat.id);
//                          setEditingTitle(chat.title);
//                       }}
//                      className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
//                   >
//                     <Pencil size={15} />
//                   </button>

//                   <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                          handleDeleteChat(chat.id);
//                       }}
//                       className="rounded-lg p-2 text-gray-400 transition hover:bg-red-500/20 hover:text-red-400"
//                   >
//                      <Trash2 size={16} />
//                  </button>
//               </motion.div>
//             ))}
//           </div>

//       </div>

//       {/* Footer */}

//        <div className="border-t border-white/10 p-4">

//             <div className="mb-4 flex items-center gap-3 rounded-2xl glass p-3">

//                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
//                   A
//               </div>

//               <div className="flex-1 overflow-hidden">
//                  <p className="truncate font-semibold text-white">
//                       Abhishek Yadav
//                  </p>

//                <p className="truncate text-xs text-gray-400">
//                    Mern Stack Developer
//                </p>
//            </div>
//        </div>

//        <button 
//            onClick={() => setShowSettings(true)}
//            className="mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-gray-300 transition hover:bg-white/5">
//            <Settings size={18} />
//               Settings
//         </button>

//        <button 
//            onClick={() => setShowProfile(true)}
//            className="flex w-full items-center gap-3 rounded-xl p-3 text-gray-300 transition hover:bg-white/5">
//            <User size={18} />
//                Profile
//        </button>

//     </div>

//     </aside>
//   );
// };

// export default Sidebar;







import {
  Plus,
  Search,
  Settings,
  User,
  MessageSquare,
  Trash2,
  Pencil,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = ({
  chats,
  currentChatId,
  openChat,
  handleDeleteChat,
  handleRenameChat,
  handleNewChat,
  searchQuery,
  setSearchQuery,
  setShowSettings,
  setShowProfile,
  isMobileOpen,
  onClose,
}) => {
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const selectChat = (chatId) => {
    openChat(chatId);
    onClose();
  };

  const createNewChat = () => {
    handleNewChat();
    onClose();
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between border-b border-white/10 p-4 sm:p-5">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Perplexity
        </h1>

        <button
          onClick={onClose}
          aria-label="Close chat history"
          className="rounded-xl p-2 text-gray-300 hover:bg-white/10 lg:hidden"
        >
          <X size={22} />
        </button>
      </div>

      <div className="p-3 sm:p-4">
        <button
          onClick={createNewChat}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 active:scale-[0.98]"
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>

      <div className="px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3">
          <Search size={18} className="shrink-0 text-gray-400" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chats..."
            aria-label="Search chats"
            className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="sidebar-scroll mt-5 min-h-0 flex-1 overflow-y-auto px-3 sm:px-4">
        <p className="mb-3 text-xs uppercase tracking-wider text-gray-500">
          Chat History
        </p>

        <div className="space-y-2">
          {Object.values(chats || {})
            .filter((item) =>
              (item.title || "New Chat")
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((item) => (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => selectChat(item.id)}
                className={`flex min-w-0 cursor-pointer items-center gap-2 rounded-2xl p-2 sm:gap-3 sm:p-3 ${
                  currentChatId === item.id
                    ? "bg-gradient-to-r from-blue-600/90 to-cyan-500/80 text-white shadow-lg shadow-blue-500/20"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                <MessageSquare size={18} className="shrink-0" />

                {editingId === item.id ? (
                  <input
                    autoFocus
                    value={editingTitle}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (editingTitle.trim()) {
                          handleRenameChat(item.id, editingTitle.trim());
                        }
                        setEditingId(null);
                      }

                      if (e.key === "Escape") {
                        setEditingId(null);
                      }
                    }}
                    onBlur={() => setEditingId(null)}
                    className="min-w-0 flex-1 rounded-lg border border-blue-500/30 bg-black/30 px-2 py-1 text-sm text-white outline-none"
                  />
                ) : (
                  <span className="min-w-0 flex-1 truncate text-sm">
                    {item.title || "New Chat"}
                  </span>
                )}

                <button
                  aria-label="Rename chat"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingId(item.id);
                    setEditingTitle(item.title || "");
                  }}
                  className="shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"
                >
                  <Pencil size={15} />
                </button>

                <button
                  aria-label="Delete chat"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteChat(item.id);
                  }}
                  className="shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-red-500/20 hover:text-red-400"
                >
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-white/10 p-3 sm:p-4">
        <div className="mb-3 flex min-w-0 items-center gap-3 rounded-2xl bg-white/5 p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-white">
              Abhishek Yadav
            </p>
            <p className="truncate text-xs text-gray-400">
              MERN Stack Developer
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setShowSettings(true);
            onClose();
          }}
          className="mb-1 flex w-full items-center gap-3 rounded-xl p-3 text-gray-300 hover:bg-white/5"
        >
          <Settings size={18} />
          Settings
        </button>

        <button
          onClick={() => {
            setShowProfile(true);
            onClose();
          }}
          className="flex w-full items-center gap-3 rounded-xl p-3 text-gray-300 hover:bg-white/5"
        >
          <User size={18} />
          Profile
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden h-full w-64 shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#080b12] xl:flex 2xl:w-72">
        {sidebarContent}
      </aside>

      {/* Mobile and tablet drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            aria-label="Close chat history"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-sm"
          />

          <aside className="absolute inset-y-0 left-0 flex w-[min(88vw,340px)] flex-col overflow-hidden border-r border-white/10 bg-[#080b12] shadow-2xl">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
