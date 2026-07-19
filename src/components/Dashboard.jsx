import { useState, useEffect, useRef } from "react";
import WelcomeBanner from "./WelcomeBanner";
import SubjectGrid from "./SubjectGrid";
import DashboardNavbar from "./DashboardNavbar";
import LyraAvatar from "./LyraAvatar";
import ChatBox from "./ChatBox";
import MessageInput from "./MessageInput";
import { askGemini } from "../services/lyraAI";
import { analyzeHomeworkImage } from "../services/visionAI";
import HomeworkScanner from "./HomeworkScanner";

function Dashboard() {

  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  const [chat, setChat] = useState([
    {
      sender: "lyra",
      text: "👋 Welcome! I'm LYRA, your Dreamverse AI Tutor. Ask me anything or upload your homework and I'll help you understand it step by step."
    }
  ]);

  const [thinking, setThinking] = useState(false);

  const chatEndRef = useRef(null);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, thinking]);


  async function sendMessage() {

    if (!message.trim()) return;

    const prompt = message;

    setChat((prev) => [
      ...prev,
      {
        sender: "student",
        text: prompt,
      },
    ]);

    setMessage("");
    setThinking(true);


    try {

      const reply = await askGemini(prompt);


      setChat((prev) => [
        ...prev,
        {
          sender: "lyra",
          text: reply,
        },
      ]);


    } catch (error) {

      console.error(error);


      setChat((prev) => [
        ...prev,
        {
          sender: "lyra",
          text: "⚠️ Sorry, LYRA couldn't connect. Please try again.",
        },
      ]);

    }


    setThinking(false);

  }



  async function handleUpload(e) {

    const file = e.target.files[0];


    if (!file) return;


    setImage(URL.createObjectURL(file));


    setChat((prev) => [
      ...prev,
      {
        sender: "student",
        text: `📷 Uploaded: ${file.name}`,
      },
      {
        sender: "lyra",
        text: "🔎 I'm analyzing your homework image...",
      },
    ]);


    setThinking(true);


    try {

      const base64 = await new Promise((resolve) => {

        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);

        reader.readAsDataURL(file);

      });


      const reply = await analyzeHomeworkImage(base64);


      setChat((prev) => [
        ...prev,
        {
          sender: "lyra",
          text: reply,
        },
      ]);


    } catch (error) {

      console.error(error);


      setChat((prev) => [
        ...prev,
        {
          sender: "lyra",
          text: "⚠️ LYRA couldn't analyze this homework image. Please try again.",
        },
      ]);

    }


    setThinking(false);

  }



  function handleQuickStart(prompt) {

    setMessage(prompt);

  }



  return (

    <section className="min-h-screen px-6 py-8">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto">

        <WelcomeBanner />

        <SubjectGrid />


        <div className="mt-8 rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-8">


          <LyraAvatar 
            onQuickStart={handleQuickStart} 
          />


          <ChatBox
            chat={chat}
            thinking={thinking}
            chatEndRef={chatEndRef}
          />


          {image && (

            <div className="mt-8 flex justify-center">

              <img
                src={image}
                alt="Homework upload"
                className="rounded-3xl border border-white/20 max-h-80 shadow-xl"
              />

            </div>

          )}


          <MessageInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            handleUpload={handleUpload}
          />


        </div>


      </div>


    </section>

  );

}


export default Dashboard;