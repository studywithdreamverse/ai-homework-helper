function SubjectGrid() {

  const subjects = [

    {
      emoji: "📐",
      title: "Mathematics",
      description: "Algebra • Geometry • Calculus",
      color: "from-pink-500 to-purple-500"
    },

    {
      emoji: "🔬",
      title: "Science",
      description: "Biology • Chemistry • Physics",
      color: "from-cyan-500 to-blue-500"
    },

    {
      emoji: "📖",
      title: "English",
      description: "Grammar • Writing • Literature",
      color: "from-emerald-500 to-green-500"
    },

    {
      emoji: "💻",
      title: "Programming",
      description: "HTML • CSS • JavaScript",
      color: "from-orange-500 to-red-500"
    }

  ];

  return (

    <div className="mb-10">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-black">
          Choose a Subject
        </h2>

        <p className="text-pink-200">
          Learn anything with LYRA
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {subjects.map((subject) => (

          <button
            key={subject.title}
            className="group text-left bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:border-pink-400 hover:scale-105 transition duration-300"
          >

            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-3xl shadow-lg`}>

              {subject.emoji}

            </div>

            <h3 className="text-2xl font-bold mt-5 group-hover:text-pink-300 transition">

              {subject.title}

            </h3>

            <p className="text-pink-200 mt-3 leading-6">

              {subject.description}

            </p>

            <div className="mt-6 text-pink-300 font-semibold opacity-0 group-hover:opacity-100 transition">

              Start Learning →

            </div>

          </button>

        ))}

      </div>

    </div>

  );

}

export default SubjectGrid;