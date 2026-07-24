import {
  Plus,
  Search,
  Settings,
  User,
  MessageSquare,
  Trash2,
  Pencil,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";



const Sidebar = ({ chats, currentChatId, openChat,  handleDeleteChat, handleRenameChat, handleNewChat, }) => {

  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  return (
    <aside className="hidden md:flex h-full w-72 shrink-0 flex-col rounded-3xl border border-white/10 bg-[#080b12]">

      {/* Logo */}
      <div className="border-b border-white/10 p-5">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Perplexity
        </h1>
      </div>

      {/* New Chat */}
      <div className="p-4">
        <motion.button
             onClick={handleNewChat}
             whileHover={{ scale: 1.03 }}
             whileTap={{ scale: 0.98 }}
             className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
               from-blue-600
               to-cyan-500
               py-3
               font-semibold
              text-white
              shadow-lg
                shadow-blue-500/20
                transition
            "
        >
          
           <Plus size={18} />     
              New Chat
        </motion.button>
      </div>

      {/* Search */}
      <div className="px-4">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <Search size={18} className="text-gray-400" />

          <input
            placeholder="Search..."
            className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Chat History */}
      <div className=" sidebar-scroll mt-5 flex-1 overflow-y-auto px-4">

           <p className="mb-3 text-xs uppercase tracking-wider text-gray-500">
             Chats
          </p>

          <div className="space-y-2"> 
            {Object.values(chats).map((chat) => (
               <motion.div
                    key={chat.id}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openChat(chat.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all duration-300
                      ${
                          currentChatId === chat.id
                             ? "bg-gradient-to-r from-blue-600/90 to-cyan-500/80 text-white shadow-lg shadow-blue-500/20"
                             : "glass text-gray-300 hover:bg-white/10"
                      }`}
              >
                 {/* <MessageSquare size={18} className="shrink-0" />

                  <span className="truncate">
                     {chat.title}
                  </span>

                  <button
                     onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteChat(chat.id);
                      }}
                      className="ml-auto rounded-lg p-2 text-gray-400 transition hover:bg-red-500/20 hover:text-red-400"
                  >
                     <Trash2 size={16} />
                  </button> */}

                  <MessageSquare size={18} className="shrink-0" />

                  {editingId === chat.id ? (
                    <input
                        autoFocus
                         value={editingTitle}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => setEditingTitle(e.target.value)}
                         onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                  if (editingTitle.trim()) {
                                      handleRenameChat(chat.id, editingTitle.trim());
                                  }
                                  setEditingId(null);
                            }

                            if (e.key === "Escape") {
                                 setEditingId(null);
                            }
                          }}
                          onBlur={() => setEditingId(null)}
                          className="flex-1 rounded-lg border border-blue-500/30 bg-black/30 px-2 py-1 text-sm text-white outline-none"
                    />
                  ) : (
                    <span className="flex-1 truncate">
                        {chat.title}
                    </span>
                  )}

                  <button
                      onClick={(e) => {
                         e.stopPropagation();

                         setEditingId(chat.id);
                         setEditingTitle(chat.title);
                      }}
                     className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                      onClick={(e) => {
                        e.stopPropagation();
                         handleDeleteChat(chat.id);
                      }}
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-red-500/20 hover:text-red-400"
                  >
                     <Trash2 size={16} />
                 </button>
              </motion.div>
            ))}
          </div>

      </div>

      {/* Footer */}

       <div className="border-t border-white/10 p-4">

            <div className="mb-4 flex items-center gap-3 rounded-2xl glass p-3">

               <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
                  A
              </div>

              <div className="flex-1 overflow-hidden">
                 <p className="truncate font-semibold text-white">
                      Abhishek
                 </p>

               <p className="truncate text-xs text-gray-400">
                   Frontend Developer
               </p>
           </div>
       </div>

       <button className="mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-gray-300 transition hover:bg-white/5">
           <Settings size={18} />
              Settings
        </button>

       <button className="flex w-full items-center gap-3 rounded-xl p-3 text-gray-300 transition hover:bg-white/5">
           <User size={18} />
               Profile
       </button>

    </div>

    </aside>
  );
};

export default Sidebar;