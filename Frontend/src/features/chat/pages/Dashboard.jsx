// import React, {useEffect} from 'react'
// import { useSelector } from 'react-redux'
// import { useChat } from '../hooks/useChat'

// const Dashboard = () => {

//   const chat = useChat()
//   const { user } = useSelector(state => state.auth) // direct select karo

//   console.log(user)

//   useEffect(() => {
//     chat.initializeSocketConnection()
//   },[])

//   return (
//     <main className='h-screen w-full flex bg-neutral-800'></main>
//   )
// }

// export default Dashboard

// import React, { useEffect, useState } from 'react'
// import ReactMarkdown from 'react-markdown'
// import { useSelector } from 'react-redux'
// import { useChat } from '../hooks/useChat'
// import remarkGfm from 'remark-gfm'

// const Dashboard = () => {
//   const chat = useChat()
//   const [ chatInput, setChatInput ] = useState('')
//   const chats = useSelector((state) => state.chat.chats)
//   const currentChatId = useSelector((state) => state.chat.currentChatId)

//   useEffect(() => {
//     chat.initializeSocketConnection()
//     chat.handleGetChats()
//   }, [])

//   const handleSubmitMessage = (event) => {
//     event.preventDefault()

//     const trimmedMessage = chatInput.trim()
//     if (!trimmedMessage) {
//       return
//     }

//     chat.handleSendMessage({ message: trimmedMessage, chatId: currentChatId })
//     setChatInput('')
//   }

//   const openChat = (chatId) => {
//     chat.handleOpenChat(chatId,chats)
//   }

//   return (
//     <main className='min-h-screen w-full bg-[#07090f] p-3 text-white md:p-5'>
//       <section className='mx-auto flex h-[calc(100vh-1.5rem)] w-full gap-4 rounded-3xl border   p-1 md:h-[calc(100vh-2.5rem)] md:gap-6 md:p-1 border-none'>
//         <aside className='hidden h-full w-72 shrink-0 rounded-3xl border  bg-[#080b12] p-4 md:flex md:flex-col'>
//           <h1 className='mb-5 text-3xl font-semibold tracking-tight'>Perplexity</h1>

//           <div className='space-y-2'>
//             {Object.values(chats).map((chat,index) => (
//               <button
//                 onClick={()=>{openChat(chat.id)}}
//                 key={index}
//                 type='button'
//                 className='w-full cursor-pointer rounded-xl border border-white/60 bg-transparent px-3 py-2 text-left text-base font-medium text-white/90 transition hover:border-white hover:text-white'
//               >
//                 {chat.title}
//               </button>
//             ))}
//           </div>
//         </aside>

//         <section className='relative max-w-3/5 mx-auto flex h-full min-w-0 flex-1 flex-col gap-4'>

//           <div className='messages flex-1 space-y-3 overflow-y-auto pr-1 pb-30'>
//             {chats[ currentChatId ]?.messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`max-w-[82%] w-fit rounded-2xl px-4 py-3 text-sm md:text-base ${message.role === 'user'
//                     ? 'ml-auto rounded-br-none bg-white/12 text-white'
//                     : 'mr-auto border-none text-white/90'
//                   }`}
//               >
//                 {message.role === 'user' ? (
//                   <p>{message.content}</p>
//                 ) : (
//                   <ReactMarkdown
//                     components={{
//                       p: ({ children }) => <p className='mb-2 last:mb-0'>{children}</p>,
//                       ul: ({ children }) => <ul className='mb-2 list-disc pl-5'>{children}</ul>,
//                       ol: ({ children }) => <ol className='mb-2 list-decimal pl-5'>{children}</ol>,
//                       code: ({ children }) => <code className='rounded bg-white/10 px-1 py-0.5'>{children}</code>,
//                       pre: ({ children }) => <pre className='mb-2 overflow-x-auto rounded-xl bg-black/30 p-3'>{children}</pre>
//                     }}
//                     remarkPlugins={[remarkGfm]}
//                   >
//                     {message.content}
//                   </ReactMarkdown>
//                 )}
//               </div>
//             ))}
//           </div>

//           <footer className='rounded-3xl w-full absolute bottom-2 border border-white/60 bg-[#080b12] p-4 md:p-5'>
//             <form onSubmit={handleSubmitMessage} className='flex flex-col gap-3 md:flex-row'>
//               <input
//                 type='text'
//                 value={chatInput}
//                 onChange={(event) => setChatInput(event.target.value)}
//                 placeholder='Type your message...'
//                 className='w-full rounded-2xl border border-white/50 bg-transparent px-4 py-3 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-white/90'
//               />
//               <button
//                 type='submit'
//                 disabled={!chatInput.trim()}
//                 className='rounded-2xl border border-white/60 px-6 py-3 text-lg font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50'
//               >
//                 Send
//               </button>
//             </form>
//           </footer>
//         </section>
//       </section>
//     </main>
//   )
// }

// export default Dashboard



// import React, { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import { useSelector } from "react-redux";
// import { useChat } from "../hooks/useChat";
// import remarkGfm from "remark-gfm";
// import Sidebar from "../components/Sidebar";
// import ChatInput from "../components/ChatInput";
// import Header from "../components/Header";
// import AuroraBackground from "../components/AuroraBackGround";
// import MessageBubble from "../components/MessageBubble";
// import ChatWindow from "../components/ChatWindow";
// import ProfileModal from "../components/ProfileModal";
// import { useTheme } from "../../../context/ThemeContext";

// const Dashboard = () => {
//   const chat = useChat();
//   const { theme, toggleTheme } = useTheme();
//   //const dispatch = useDispatch();
//   const [chatInput, setChatInput] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showSettings, setShowSettings] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   //const [theme, setTheme] = useState("dark");

//   const chats = useSelector((state) => state.chat.chats);
//   const currentChatId = useSelector((state) => state.chat.currentChatId);

//   useEffect(() => {
//     chat.initializeSocketConnection();
//     chat.handleGetChats();
//   }, []);

//   const handleSubmitMessage = (event) => {
//     event.preventDefault();

//     const trimmedMessage = chatInput.trim();
//     if (!trimmedMessage) {
//       return;
//     }

//     chat.handleSendMessage({ message: trimmedMessage, chatId: currentChatId });
//     setChatInput("");
//   };

//   const openChat = (chatId) => {
//     chat.handleOpenChat(chatId, chats);
//   };

//   return (
//     <main
//       className={`min-h-screen w-full p-3 md:p-5 mx-auto flex transition-all duration-500 ${
//         theme === "dark" ? "bg-[#07090f] text-white" : "bg-gray-100 text-black"
//       }`}
//     >
//       <section className="mx-auto flex h-[calc(100vh-1.5rem)] w-full gap-4 rounded-3xl border   p-1 md:h-[calc(100vh-2.5rem)] md:gap-6 md:p-1 border-none">
//         <AuroraBackground />
//         <Sidebar
//           chats={chats}
//           currentChatId={currentChatId}
//           openChat={openChat}
//           handleDeleteChat={chat.handleDeleteChat}
//           handleRenameChat={chat.handleRenameChat}
//           handleNewChat={chat.handleNewChat}
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           setShowSettings={setShowSettings}
//           setShowProfile={setShowProfile}
//           // theme={theme}
//           // setTheme={setTheme}
//         />

//         <section className="relative flex h-full flex-1 flex-col overflow-hidden ">
//           <div className="relative z-8">
//             <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//           </div>

//           <div className="flex-1 min-h-0 overflow-hidden">
//             <ChatWindow chats={chats} currentChatId={currentChatId} />
//           </div>

//           <ChatInput
//             chatInput={chatInput}
//             setChatInput={setChatInput}
//             handleSubmitMessage={handleSubmitMessage}
//           />
//         </section>
//       </section>
//       {showSettings && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//           <div className="w-[520px] rounded-3xl border border-white/10 bg-[#0f172a] p-7 shadow-2xl">
//             <h2 className="mb-6 text-3xl font-bold text-white">⚙ Settings</h2>

//             <div className="space-y-6">
//               {/* <div>
//           <h3 className="mb-2 text-lg font-semibold text-cyan-400">
//             Appearance
//           </h3>

//           <div className="rounded-xl bg-white/5 p-4">
//             <p className="text-white">Theme</p>
//             <p className="text-sm text-gray-400">
//               Dark Mode
//             </p>
//           </div>
//         </div> */}

//               {/* <div>
//            <h3 className="mb-2 text-lg font-semibold text-cyan-400">
//                   Appearance
//            </h3>

//        <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

//         <div>
//           <p className="text-white">
//             Theme
//          </p>

//          <p className="text-sm text-gray-400">
//              Switch between Dark & Light mode
//         </p>
//      </div>

//       <button
//          onClick={toggleTheme}
//         //  {() =>
//         //    //setTheme(theme === "dark" ? "light" : "dark")
           
//         //   }
//        className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
//        >
//          {theme === "dark"
//          ? "🌙 Dark"
//          : "☀️ Light"}
//      </button>

//      </div>
//         </div> */}
//               <div>
//                 <h3 className="mb-2 text-lg font-semibold text-cyan-400">
//                   Appearance
//                 </h3>

//                 <div className=//"rounded-xl bg-red-500 p-4 flex items-center justify-between"
//                 "rounded-xl bg-white/5 p-4 flex items-center justify-between">
//                   <div>
//                     <p className="text-white font-medium">Theme</p>

//                     <p className="text-sm text-gray-400">
//                       Switch between Dark & Light mode
//                     </p>
//                   </div>

//                   <button
//                     onClick={toggleTheme}
//                     className={`rounded-xl px-5 py-2 font-semibold transition ${
//                       theme === "dark"
//                         ? "bg-cyan-500 text-white"
//                         : "bg-yellow-400 text-black"
//                     }`}
//                   >
//                     {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
//                   </button>

//                   {/* <button
//   onClick={toggleTheme}
//   className="bg-green-500 p-3"
// >
//   CLICK ME
// </button> */}
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-2 text-lg font-semibold text-cyan-400">
//                   AI Model
//                 </h3>

//                 <div className="rounded-xl bg-white/5 p-4">
//                   <p className="text-white">Gemini Flash</p>

//                   <p className="text-sm text-gray-400">Default AI Model</p>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-2 text-lg font-semibold text-cyan-400">
//                   Chat
//                 </h3>

//                 <div className="rounded-xl bg-white/5 p-4 space-y-2">
//                   <p className="text-white">✅ Auto Scroll Enabled</p>

//                   <p className="text-white">✅ Code Highlight Enabled</p>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="mb-2 text-lg font-semibold text-red-400">
//                   Danger Zone
//                 </h3>

//                 <button
//                   onClick={async () => {
//                     const confirmed = window.confirm(
//                       "Are you sure you want to delete all chats?",
//                     );

//                     if (!confirmed) return;

//                     await chat.handleClearChats();
//                   }}
//                   className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
//                 >
//                   Clear All Chats
//                 </button>
//               </div>
//             </div>

//             <button
//               onClick={() => setShowSettings(false)}
//               className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       <ProfileModal
//         open={showProfile}
//         onClose={() => setShowProfile(false)}
//         chats={chats}
//       />
//     </main>
//   );
// };

// export default Dashboard;




import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useChat } from "../hooks/useChat";
import Sidebar from "../components/Sidebar";
import ChatInput from "../components/ChatInput";
import Header from "../components/Header";
import AuroraBackground from "../components/AuroraBackGround";
import ChatWindow from "../components/ChatWindow";
import ProfileModal from "../components/ProfileModal";
import { useTheme } from "../../../context/ThemeContext";

const Dashboard = () => {
  const chat = useChat();
  const { theme, toggleTheme } = useTheme();

  const [chatInput, setChatInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const chats = useSelector((state) => state.chat.chats);
  const currentChatId = useSelector((state) => state.chat.currentChatId);

  // Initialize the socket and load the user's chat history.
  useEffect(() => {
    chat.initializeSocketConnection();
    chat.handleGetChats();

    // Keep the original chat hook lifecycle unchanged.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close the mobile sidebar with Escape.
  useEffect(() => {
    if (!isMobileOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  const handleSubmitMessage = (event) => {
    event.preventDefault();

    const message = chatInput.trim();

    if (!message) return;

    chat.handleSendMessage({
      message,
      chatId: currentChatId,
    });

    setChatInput("");
  };

  const handleOpenChat = (chatId) => {
    chat.handleOpenChat(chatId, chats);
    setIsMobileOpen(false);
  };

  const handleNewChat = () => {
    chat.handleNewChat();
    setChatInput("");
    setIsMobileOpen(false);
  };

  const handleClearChats = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all chats? This action cannot be undone."
    );

    if (!confirmed) return;

    try {
      await chat.handleClearChats();
      setShowSettings(false);
      setChatInput("");
    } catch (error) {
      console.error("Failed to clear chats:", error);
    }
  };

  return (
    <main
      className={`h-[100dvh] w-full overflow-hidden p-2 transition-colors duration-300 sm:p-3 lg:p-4 ${
        theme === "dark"
          ? "bg-[#07090f] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <section className="relative mx-auto flex h-full w-full min-w-0 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl lg:gap-4">
        <AuroraBackground />

        {/* Desktop sidebar and mobile slide-out drawer */}
        <Sidebar
          chats={chats}
          currentChatId={currentChatId}
          openChat={handleOpenChat}
          handleDeleteChat={chat.handleDeleteChat}
          handleRenameChat={chat.handleRenameChat}
          handleNewChat={handleNewChat}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setShowSettings={setShowSettings}
          setShowProfile={setShowProfile}
          isMobileOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
        />

        {/* Main chat area */}
        <section className="relative z-10 flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <header className="relative z-20 shrink-0">
            <Header
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onMenuClick={() => setIsMobileOpen(true)}
            />
          </header>

          {/* Messages take the available space and scroll independently */}
          <div className="min-h-0 min-w-0 flex-1 overflow-hidden">
            <ChatWindow
              chats={chats}
              currentChatId={currentChatId}
            />
          </div>

          {/* Keep the input visible at the bottom */}
          <div className="z-10 shrink-0 pt-2 sm:pt-3">
            <ChatInput
              chatInput={chatInput}
              setChatInput={setChatInput}
              handleSubmitMessage={handleSubmitMessage}
            />
          </div>
        </section>
      </section>

      {/* Settings modal */}
      {showSettings && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm sm:p-5"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowSettings(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-title"
            className="my-auto max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#0f172a] p-4 shadow-2xl sm:rounded-3xl sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2
                id="settings-title"
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                Settings
              </h2>

              <button
                type="button"
                onClick={() => setShowSettings(false)}
                aria-label="Close settings"
                className="rounded-lg px-3 py-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Appearance */}
              <section>
                <h3 className="mb-3 font-semibold text-cyan-400">
                  Appearance
                </h3>

                <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 p-4">
                  <div className="min-w-0">
                    <p className="font-medium text-white">Theme</p>
                    <p className="mt-1 text-sm text-gray-400">
                      Switch between dark and light mode.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={`shrink-0 rounded-xl px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                      theme === "dark"
                        ? "bg-cyan-500 text-white hover:bg-cyan-400"
                        : "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                    }`}
                  >
                    {theme === "dark" ? "Dark mode" : "Light mode"}
                  </button>
                </div>
              </section>

              {/* AI model */}
              <section>
                <h3 className="mb-3 font-semibold text-cyan-400">
                  AI Model
                </h3>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="font-medium text-white">Gemini Flash</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Default AI model.
                  </p>
                </div>
              </section>

              {/* Chat settings */}
              <section>
                <h3 className="mb-3 font-semibold text-cyan-400">
                  Chat
                </h3>

                <div className="space-y-3 rounded-xl bg-white/5 p-4 text-sm text-gray-200">
                  <p>Auto-scroll is enabled.</p>
                  <p>Markdown rendering is enabled.</p>
                  <p>Chat history is available from the sidebar.</p>
                </div>
              </section>

              {/* Danger zone */}
              <section>
                <h3 className="mb-3 font-semibold text-red-400">
                  Danger Zone
                </h3>

                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <p className="mb-3 text-sm text-gray-300">
                    Delete your saved chats from the chat history.
                  </p>

                  <button
                    type="button"
                    onClick={handleClearChats}
                    className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
                  >
                    Clear All Chats
                  </button>
                </div>
              </section>
            </div>

            <button
              type="button"
              onClick={() => setShowSettings(false)}
              className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Done
            </button>
          </section>
        </div>
      )}

      {/* Profile modal */}
      <ProfileModal
        open={showProfile}
        onClose={() => setShowProfile(false)}
        chats={chats}
      />
    </main>
  );
};

export default Dashboard;
