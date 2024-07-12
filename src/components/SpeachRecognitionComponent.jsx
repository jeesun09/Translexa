import "regenerator-runtime/runtime.js";
import React, { useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeachRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handelVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };
  return (
    <div className="flex items-center flex-row">
      <FaMicrophone
        size={21}
        className="text-gray-400"
        onClick={handelVoiceRecording}
      />
    </div>
  );
};

export default SpeachRecognitionComponent;
