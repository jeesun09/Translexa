import React from "react";
import { IoLanguage } from "react-icons/io5";

const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) => {
  return (
    <span className="cursor-pointer rounded-full space-x-1 pl-2 bg-black flex items-center flex-row">
      <IoLanguage size={20} className="text-gray-400" />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="bg-black flex flex-row rounded-full py-1 text-white border-none outline-none"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </span>
  );
};

export default LanguageSelector;
