function ChatBox({ chat, thinking, chatEndRef }) {
  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-6 mt-8 h-[420px] overflow-y-auto space-y-6 border border-white/10 shadow-2xl">

      {chat.map((item, index) => (
        <div
          key={index}
          className={`flex ${
            item.sender === "student"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`max-w-[82%] px-5 py-4 rounded-3xl shadow-xl transition-all duration-300 ${
              item.sender === "student"
                ? "bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white"
                : "bg-white/10 border border-white/10 text-white backdrop-blur-md"
            }`}
          >
            <div className="font-bold mb-2 flex items-center gap-2">
              {item.sender === "student" ? (
                <>
                  🧑 <span>You</span>
                </>
              ) : (
                <>
                  🔮 <span>LYRA</span>
                </>
              )}
            </div>

            <p className="leading-7 whitespace-pre-wrap text-[15px]">
              {item.text}
            </p>
          </div>
        </div>
      ))}

      {thinking && (
        <div className="flex justify-start">
          <div className="bg-white/10 border border-purple-400/20 rounded-3xl px-5 py-4 shadow-xl backdrop-blur-md">

            <div className="font-bold mb-3 flex items-center gap-2">
              🔮 LYRA
            </div>

            <div className="flex items-center gap-2">

              <div className="flex gap-1">

                <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>

                <span
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></span>

                <span
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></span>

              </div>

              <span className="text-white/80">
                LYRA is thinking...
              </span>

            </div>

          </div>
        </div>
      )}

      <div ref={chatEndRef}></div>

    </div>
  );
}

export default ChatBox;