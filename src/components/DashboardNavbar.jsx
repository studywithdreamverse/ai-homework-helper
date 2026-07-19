function DashboardNavbar() {
  return (
    <nav className="max-w-7xl mx-auto mb-8">

      <div className="rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl px-8 py-5 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,.45)] text-3xl">

            🔮

          </div>

          <div>

            <h1 className="text-3xl font-black bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Dreamverse AI
            </h1>

            <p className="text-pink-100 text-sm">
              Powered by LYRA • Your AI Learning Companion
            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="hidden xl:flex items-center gap-3">

          <button className="px-5 py-2 rounded-xl hover:bg-white/10 transition">
            🏠 Dashboard
          </button>

          <button className="px-5 py-2 rounded-xl hover:bg-white/10 transition">
            📚 Subjects
          </button>

          <button className="px-5 py-2 rounded-xl hover:bg-white/10 transition">
            📷 Homework
          </button>

          <button className="px-5 py-2 rounded-xl hover:bg-white/10 transition">
            📈 Progress
          </button>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-4 py-2">

            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

            <span className="text-sm text-emerald-200 font-medium">
              LYRA Online
            </span>

          </div>

          <button className="relative w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-xl">

            🔔

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-500"></span>

          </button>

          <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-xl">
            ⚙️
          </button>

          <div className="flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-4 py-2">

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg">

              👤

            </div>

            <div className="hidden md:block">

              <div className="font-semibold">
                Student
              </div>

              <div className="text-xs text-pink-200">
                Dreamverse Explorer
              </div>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default DashboardNavbar;