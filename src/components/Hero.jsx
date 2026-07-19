import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const [started, setStarted] = useState(false);
  const [awakening, setAwakening] = useState(false);

  const navigate = useNavigate();

  const startLyra = () => {
    setAwakening(true);
    setStarted(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-8 pt-20 pb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-8">
            ✨
            <span className="text-pink-200 font-medium">
              AI-Powered Learning Platform
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Study Smarter
            <br />
            with
            <span className="block bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Dreamverse AI
            </span>
          </h1>

          <p className="text-xl text-pink-100 mt-8 leading-8 max-w-xl">
            Meet LYRA — your magical AI tutor that teaches step by step,
            explains homework clearly, and helps students truly understand
            what they're learning.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={startLyra}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
            >
              🚀 Awaken LYRA
            </button>

            <button className="bg-white/10 hover:bg-white/20 transition border border-white/20 px-8 py-4 rounded-2xl text-lg">
              📸 Upload Homework
            </button>

          </div>

          <div className="flex gap-12 mt-14">

            <div>
              <h3 className="text-4xl font-bold text-pink-400">
                24/7
              </h3>
              <p className="text-pink-200">
                AI Tutor
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-pink-400">
                50+
              </h3>
              <p className="text-pink-200">
                Subjects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-pink-400">
                Smart
              </h3>
              <p className="text-pink-200">
                Learning
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="relative w-[430px] h-[430px] rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden flex flex-col justify-center items-center">

            {/* Floating stars */}

            <div className="absolute top-8 left-10 text-3xl animate-bounce">
              🌙
            </div>

            <div className="absolute top-10 right-12 text-2xl animate-pulse">
              ✨
            </div>

            <div className="absolute bottom-10 left-12 text-2xl animate-bounce">
              ⭐
            </div>

            <div className="absolute bottom-10 right-12 text-2xl animate-pulse">
              💫
            </div>

            {/* Magic Aura */}

            <div className="absolute w-72 h-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>

            <div
              className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-spin"
              style={{ animationDuration: "25s" }}
            ></div>

            {awakening && (
              <>
                <div className="absolute w-52 h-52 rounded-full bg-pink-400/40 animate-ping"></div>
                <div className="absolute w-72 h-72 rounded-full bg-purple-400/20 animate-pulse"></div>
              </>
            )}

            {/* Orb */}

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-pink-400 blur-3xl opacity-60 animate-pulse"></div>

              <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 flex items-center justify-center shadow-[0_0_60px_rgba(255,0,255,0.5)] animate-bounce">

                <span className="text-8xl">
                  🔮
                </span>

              </div>

            </div>

            <h2 className="text-4xl font-black mt-8 bg-gradient-to-r from-pink-300 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              LYRA
            </h2>

            <p className="text-pink-100 mt-3 text-center px-10">
              Your magical AI study companion is ready to help you learn,
              solve homework, and build confidence.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;