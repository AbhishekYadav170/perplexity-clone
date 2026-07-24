const ChatInput = ({
  chatInput,
  setChatInput,
  handleSubmitMessage,
}) => {
  return (
    <footer className=" w-full rounded-3xl border border-white/60 bg-[#080b12] p-4 md:p-5">

      <form
        onSubmit={handleSubmitMessage}
        className="flex flex-col gap-3 md:flex-row"
      >

        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask anything..."
          className="w-full rounded-2xl border border-white/50 bg-transparent px-4 py-3 text-lg text-white outline-none transition placeholder:text-white/45 focus:border-white/90"
        />

        <button
          type="submit"
          disabled={!chatInput.trim()}
          className="rounded-2xl border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10 disabled:opacity-40"
        >
          Send
        </button>

      </form>

    </footer>
  );
};

export default ChatInput;