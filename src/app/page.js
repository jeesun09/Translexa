"use client";

import LanguageSelector from "../components/LanguageSelector";
import SpeachRecognitionComponent from '../components/SpeachRecognitionComponent'
import TextArea from "../components/TextArea";
import useTranslate from "../utils/useTranslate";
import { useState } from "react";
import { IoMdVolumeHigh } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

export default function Home() {
  const [sourceText, setSourceText] = useState("");
  const [copied, setCopied] = useState(false);
  const [languages] = useState([
    "English",
    "Hindi",
    "Bengali",
    "Spanish",
    "French",
    "Chinese",
    "Japanese",
    "Korean",
    "German",
    "Russian",
    "Arabic",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleAutoPlayback = (text, Language) => {

    let languageCode = "en-US"; // Default language code
    switch (Language) {
      case "English":
        languageCode = "en-US";
        break;
      case "Hindi":
        languageCode = "hi-IN";
        break;
      case "Bengali":
        languageCode = "bn-IN";
        break;
      case "Spanish":
        languageCode = "es-ES";
        break;
      case "French":
        languageCode = "fr-FR";
        break;
      case "Chinese":
        languageCode = "zh-CN";
        break;
      case "Japanese":
        languageCode = "ja-JP";
        break;
      case "Korean":
        languageCode = "ko-KR";
        break;
      case "German":
        languageCode = "de-DE";
        break;
      case "Russian":
        languageCode = "ru-RU";
        break;
      case "Arabic":
        languageCode = "ar-XA";
        break;
      default:
        languageCode = "en-US";
        break;
    }
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = languageCode;
    window.speechSynthesis.speak(utterThis);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-[50rem] lg:h-[34.77rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative h-screen flex justify-center items-center">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-700">
              Translexa
            </h1>
            <p className="mt-3 text-neutral-800">
              Need a translation? Translexa has got you covered. Translate and
              hear any language in real-time with our smart AI.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="flex flex-col space-x-3 p-3 border rounded-lg bg-neutral-700 shadow-gray-950">
                  <TextArea
                    id="source-language"
                    value={sourceText}
                    placeholder="Source Language"
                    onChange={(e) => setSourceText(e.target.value)}
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row mt-2 items-center">
                      <SpeachRecognitionComponent
                        setSourceText={setSourceText}
                      />
                    </span>
                    <span className="text-sm pr-4 mt-2 text-neutral-300">
                      {sourceText.length} / 2000
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-x-3 p-3 border rounded-lg bg-neutral-700 shadow-gray-950">
                  <TextArea
                    id="target-language"
                    value={targetText}
                    placeholder="Target Language"
                    onChange={() => {}}
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row mt-2 items-center">
                      <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        languages={languages}
                      />
                      <IoMdVolumeHigh
                        size={24}
                        className="text-gray-400"
                        onClick={() =>
                          handleAutoPlayback(targetText, selectedLanguage)
                        }
                      />
                    </span>
                    <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer mt-2">
                      <MdContentCopy
                        size={22}
                        className="text-gray-400"
                        onClick={handleCopyToClipboard}
                      />
                      {copied && (
                        <span className="text-xs text-green-500">Copied!</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
