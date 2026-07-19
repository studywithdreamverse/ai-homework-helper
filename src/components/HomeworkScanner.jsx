import { useState } from "react";
import { analyzeHomeworkImage } from "../services/visionAI";

function HomeworkScanner() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult("");
  }

  async function scanHomework() {
    if (!image) return;

    setLoading(true);
    setResult("");

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Image = reader.result;

      const response = await analyzeHomeworkImage(
        base64Image,
        "Analyze this homework and teach me how to solve it."
      );

      setResult(response);
      setLoading(false);
    };

    reader.readAsDataURL(image);
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 space-y-6">

      <div>
        <h2 className="text-2xl font-bold">
          📸 Homework Scanner
        </h2>

        <p className="text-gray-600 mt-2">
          Upload a photo of your homework and LYRA will help explain it.
        </p>
      </div>


      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full"
      />


      {preview && (
        <img
          src={preview}
          alt="Homework preview"
          className="rounded-xl max-h-80 mx-auto"
        />
      )}


      <button
        onClick={scanHomework}
        disabled={!image || loading}
        className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "LYRA is analyzing..." : "Scan Homework"}
      </button>


      {result && (
        <div className="bg-gray-50 rounded-xl p-4 whitespace-pre-wrap">
          <h3 className="font-bold mb-2">
            LYRA's Explanation:
          </h3>

          {result}
        </div>
      )}

    </div>
  );
}

export default HomeworkScanner;