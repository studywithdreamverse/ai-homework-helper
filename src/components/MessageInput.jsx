function MessageInput({
  message,
  setMessage,
  sendMessage,
  handleUpload,
}) {
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="mt-8">

      <div className="rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-5">

        <div className="flex items-center gap-3 mb-4 flex-wrap">

          <button
            onClick={() => setMessage("Explain this step by step.")}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
          >
            📚 Explain
          </button>

          <button
            onClick={() => setMessage("Summarize this lesson.")}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
          >
            📖 Summarize
          </button>

          <button
            onClick={() => setMessage("Create a short quiz.")}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
          >
            🧠 Quiz
          </button>

          <button
            onClick={() => setMessage("Translate this into English.")}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
          >
            🌍 Translate
          </button>

        </div>

        <div className="flex items-end gap-4">

          <label className="cursor-pointer w-14 h-14 rounded-2xl bg-white/10 hover:bg-pink-500 transition flex items-center justify-center text-2xl">

            📎

            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />

          </label>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            placeholder="Ask LYRA anything... (Press Enter to send)"
            className="flex-1 bg-transparent outline-none resize-none text-white placeholder:text-pink-200 leading-7"
          />

          <button
            onClick={sendMessage}
            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-110 transition-all duration-300 shadow-xl text-2xl"
          >
            🚀
          </button>

        </div>

      </div>

    </div>
  );
}

export default MessageInput;