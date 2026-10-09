
// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import TypingIndicator from "./TypingIndicator";
// import MessageBubble from "./MessageBubble";
// import EmptyState from "./EmptyState";



// const ChatWindow = ({ chats, currentChatId }) => {
//   const messages = chats[currentChatId]?.messages || [];
//   const isLoading = useSelector((state) => state.chat.isLoading);
//   const bottomRef = useRef(null);

//   useEffect(() => {
//      bottomRef.current?.scrollIntoView({
//         behavior: "smooth",
//      });
//   }, [messages, isLoading]);


//    if (!currentChatId) {
//     return <EmptyState />;
//   }


//   return (
//     <div className="messages h-full overflow-y-auto px-6 py-6">
//       <div className="mx-auto flex max-w-5xl flex-col gap-5 pb-32">
//         {messages.map((message) => (
//           <MessageBubble
//             key={message.id}
//             message={message}
//           />
//         ))}

//         {isLoading && <TypingIndicator />}

//         <div ref={bottomRef} />

//       </div>
//     </div>
//   );
// };

// export default ChatWindow;




// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import TypingIndicator from "./TypingIndicator";
// import MessageBubble from "./MessageBubble";
// import EmptyState from "./EmptyState";

// const ChatWindow = ({ chats, currentChatId }) => {
//   const messages = chats[currentChatId]?.messages || [];

//   const isLoading = useSelector((state) => state.chat.isLoading);
//   const error = useSelector((state) => state.chat.error);

//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, isLoading, error]);

//   if (!currentChatId) {
//     return <EmptyState />;
//   }

//   return (
//     <div className="messages h-full overflow-y-auto px-6 py-6">
//       <div className="mx-auto flex max-w-5xl flex-col gap-5 pb-32">

//         {/* CHAT MESSAGES */}
//         {messages.map((message) => (
//           <MessageBubble
//             key={message.id}
//             message={message}
//           />
//         ))}

//         {/* AI THINKING */}
//         {isLoading && <TypingIndicator />}

//         {/* ERROR MESSAGE */}
//         {error && !isLoading && (
//           <div className="flex justify-start">
//             <div className="max-w-3xl rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-400">
//               <p className="font-medium">
//                 ⚠️ Something went wrong
//               </p>

//               <p className="mt-1 text-sm text-red-300/80">
//                 {error}
//               </p>
//             </div>
//           </div>
//         )}

//         <div ref={bottomRef} />

//       </div>
//     </div>
//   );
// };

// export default ChatWindow;





import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import TypingIndicator from "./TypingIndicator";
import MessageBubble from "./MessageBubble";
import EmptyState from "./EmptyState";

const ChatWindow = ({ chats, currentChatId }) => {
  const messages = chats?.[currentChatId]?.messages || [];

  const isLoading = useSelector(
    (state) => state.chat.isLoading
  );

  const error = useSelector(
    (state) => state.chat.error
  );

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading, error]);

  if (!currentChatId) {
    return (
      <div className="h-full min-h-0 min-w-0 overflow-y-auto overflow-x-hidden">
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="messages h-full min-h-0 min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain px-2 py-3 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
      <div className="mx-auto flex w-full min-w-0 max-w-5xl flex-col gap-4 pb-5 sm:gap-5 sm:pb-8">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {isLoading && <TypingIndicator />}

        {error && !isLoading && (
          <div className="flex min-w-0 justify-start">
            <div className="min-w-0 max-w-full overflow-hidden break-words rounded-2xl border border-red-500/20 bg-red-500/10 px-3 py-4 text-red-400 sm:px-5">
              <p className="font-medium">
                ⚠️ Something went wrong
              </p>

              <p className="mt-1 break-words text-sm text-red-300/80 [overflow-wrap:anywhere]">
                {error}
              </p>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
