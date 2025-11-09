import { useEffect, useState } from "react";
import background_video from "@/assets/videos/DNA.mp4";

const Herosection = () => {
  const titleText = "Be the Industry Disruptor, Not the Disrupted";
  const subtitleText = "Accelerate technology roadmaps and innovation to better respond to change.";

  const [visibleTitleWords, setVisibleTitleWords] = useState<number>(0);
  const [visibleSubtitleWords, setVisibleSubtitleWords] = useState<number>(0);

  const titleWords = titleText.split(" ");
  const subtitleWords = subtitleText.split(" ");

  useEffect(() => {
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      titleIndex++;
      setVisibleTitleWords(titleIndex);
      if (titleIndex === titleWords.length) clearInterval(titleInterval);
    }, 300); // 300ms per word

    let subtitleIndex = 0;
    const subtitleTimer = setTimeout(() => {
      const subtitleInterval = setInterval(() => {
        subtitleIndex++;
        setVisibleSubtitleWords(subtitleIndex);
        if (subtitleIndex === subtitleWords.length) clearInterval(subtitleInterval);
      }, 250); // 250ms per word
    }, titleWords.length * 300 + 500); // start after title finishes + small delay

    return () => {
      clearInterval(titleInterval);
      clearTimeout(subtitleTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 max-w-7xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          {titleWords.map((word, idx) => (
            <span
              key={idx}
              className={`inline-block transition-opacity duration-500 ${
                idx < visibleTitleWords ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } mr-2`}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitleWords.map((word, idx) => (
            <span
              key={idx}
              className={`inline-block transition-opacity duration-500 ${
                idx < visibleSubtitleWords ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              } mr-2`}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Buttons (unchanged) */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="/Contactus">Contact us</a>
          </button>

          <button className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-md border border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
            <a href="/About">More about us</a>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
