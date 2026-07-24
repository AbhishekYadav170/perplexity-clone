// // import MessageBubble from "./MessageBubble";

// // const ChatWindow = ({ chats, currentChatId }) => {
// //   return (
// //     <div className="messages h-full overflow-y-auto px-4 pt-4 pb-36 space-y-5">
// //       {chats[currentChatId]?.messages.map((message) => (
// //         <MessageBubble
// //           key={message.id}
// //           message={message}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default ChatWindow;




// import MessageBubble from "./MessageBubble";

// const ChatWindow = ({ chats, currentChatId }) => {
//   return (
//     <div className="messages flex-1 overflow-y-auto px-6 py-6">
//       <div className="mx-auto flex max-w-5xl flex-col gap-5 pb-40">
//         {chats[currentChatId]?.messages.map((message) => (
//           <MessageBubble
//             key={message.id}
//             message={message}
//           />
//         ))}
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
  const messages = chats[currentChatId]?.messages || [];
  const isLoading = useSelector((state) => state.chat.isLoading);
  const bottomRef = useRef(null);

  useEffect(() => {
     bottomRef.current?.scrollIntoView({
        behavior: "smooth",
     });
  }, [messages, isLoading]);


   if (!currentChatId) {
    return <EmptyState />;
  }


  return (
    <div className="messages h-full overflow-y-auto px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 pb-32">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {isLoading && <TypingIndicator />}

        <div ref={bottomRef} />

      </div>
    </div>
  );
};

export default ChatWindow;