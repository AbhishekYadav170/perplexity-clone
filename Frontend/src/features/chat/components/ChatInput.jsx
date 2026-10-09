// const ChatInput = ({
//   chatInput,
//   setChatInput,
//   handleSubmitMessage,
// }) => {
//   return (
//     <footer className=" w-full rounded-3xl border border-white/60 bg-[#080b12] p-4 md:p-5">

//       <form
//         onSubmit={handleSubmitMessage}
//         className="flex flex-col gap-3 md:flex-row"
//       >

//         <input
//           type="text"
//           value={chatInput}
//           onChange={(e) => setChatInput(e.target.value)}
//           placeholder="Ask anything..."
//           className="w-full rounded-2xl border border-white/50 bg-transparent px-4 py-3 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-white/90"
//         />

//         <button
//           type="submit"
//           disabled={!chatInput.trim()}
//           className="rounded-2xl border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10 disabled:opacity-40"
//         >
//           Send
//         </button>

//       </form>

//     </footer>
//   );
// };

// export default ChatInput;




const ChatInput = ({
  chatInput,
  setChatInput,
  handleSubmitMessage,
}) => {
  return (
    <footer className="w-full shrink-0 rounded-2xl border border-white/20 bg-[#080b12] p-2 sm:rounded-3xl sm:p-3 lg:p-4">
      <form
        onSubmit={handleSubmitMessage}
        className="flex min-w-0 flex-col gap-2 sm:flex-row sm:gap-3"
      >
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask anything..."
          aria-label="Ask anything"
          className="min-h-12 w-full min-w-0 flex-1 rounded-xl border border-white/30 bg-transparent px-3 py-3 text-base text-white outline-none transition placeholder:text-white/45 focus:border-cyan-400 sm:rounded-2xl sm:px-4 sm:text-lg"
        />

        <button
          type="submit"
          disabled={!chatInput.trim()}
          className="min-h-11 w-full shrink-0 rounded-xl border border-white/30 px-5 py-2 font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:min-w-24 sm:rounded-2xl sm:py-3"
        >
          Send
        </button>
      </form>
    </footer>
  );
};

export default ChatInput;
