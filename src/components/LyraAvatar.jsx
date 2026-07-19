function LyraAvatar({ onQuickStart }) {
  return (
    <div className="flex flex-col items-center text-center">

      <div className="relative w-52 h-52">

        {/* Outer Aura */}
        <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>

        <div
          className="absolute inset-0 rounded-full border border-pink-400/30 animate-spin"
          style={{ animationDuration: "18s" }}
        ></div>

        <div
          className="absolute inset-4 rounded-full border border-purple-400/30 animate-spin"
          style={{
            animationDirection: "reverse",
            animationDuration: "12s",
          }}
        ></div>

        {/* Orb */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-300 via-purple-400 to-cyan-300 shadow-[0_0_70px_rgba(236,72,153,0.6)] flex items-center justify-center animate-pulse">

          <span className="text-8xl animate-bounce">
            🔮
          </span>

        </div>

      </div>

      <h2 className="mt-8 text-5xl font-black bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
        LYRA
      </h2>

      <p className="mt-4 text-pink-100 max-w-xl leading-8">
        Your intelligent AI tutor from Dreamverse Studio.
        Ask questions, solve homework step by step,
        summarize lessons, translate text,
        and learn with confidence.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full max-w-4xl">

        <button
          onClick={() =>
            onQuickStart("Explain this topic like I'm 10 years old.")
          }
          className="rounded-2xl bg-white/10 hover:bg-pink-500 transition-all duration-300 p-5"
        >
          <div className="text-3xl">📚</div>
          <div className="mt-2 font-semibold">
            Explain
          </div>
        </button>

        <button
          onClick={() =>
            onQuickStart("Solve this step by step.")
          }
          className="rounded-2xl bg-white/10 hover:bg-pink-500 transition-all duration-300 p-5"
        >
          <div className="text-3xl">📝</div>
          <div className="mt-2 font-semibold">
            Solve
          </div>
        </button>

        <button
          onClick={() =>
            onQuickStart("Create a quiz about this lesson.")
          }
          className="rounded-2xl bg-white/10 hover:bg-pink-500 transition-all duration-300 p-5"
        >
          <div className="text-3xl">🧠</div>
          <div className="mt-2 font-semibold">
            Quiz Me
          </div>
        </button>

        <button
          onClick={() =>
            onQuickStart("Summarize this lesson.")
          }
          className="rounded-2xl bg-white/10 hover:bg-pink-500 transition-all duration-300 p-5"
        >
          <div className="text-3xl">📖</div>
          <div className="mt-2 font-semibold">
            Summarize
          </div>
        </button>

      </div>

    </div>
  );
}

export default LyraAvatar;