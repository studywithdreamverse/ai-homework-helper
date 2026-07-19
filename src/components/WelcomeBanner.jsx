function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-white/20 rounded-[35px] p-8 mb-8">

      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl"></div>

      <div className="relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <p className="text-pink-200 uppercase tracking-widest text-sm">
              Welcome Back
            </p>

            <h1 className="text-5xl font-black mt-2">
              Ready to Learn? 🚀
            </h1>

            <p className="text-pink-100 mt-4 text-lg max-w-2xl">
              Dreamverse AI helps you solve homework, understand difficult
              lessons, and learn faster with your personal AI tutor, LYRA.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white/10 rounded-3xl p-5 text-center">

              <div className="text-4xl">📚</div>

              <div className="font-bold mt-2">
                Homework
              </div>

            </div>

            <div className="bg-white/10 rounded-3xl p-5 text-center">

              <div className="text-4xl">🤖</div>

              <div className="font-bold mt-2">
                AI Tutor
              </div>

            </div>

            <div className="bg-white/10 rounded-3xl p-5 text-center">

              <div className="text-4xl">🏆</div>

              <div className="font-bold mt-2">
                Progress
              </div>

            </div>

            <div className="bg-white/10 rounded-3xl p-5 text-center">

              <div className="text-4xl">⚡</div>

              <div className="font-bold mt-2">
                Fast Answers
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default WelcomeBanner;