import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request: NextRequest) {
  const reqBody = await request.json();

  const { sourceText, selectedLanguage } = reqBody;

  if (!sourceText || !selectedLanguage) {
    return NextResponse.json(
      {
        message: "Missing sourceText or selectedLanguage",
      },
      { status: 400 }
    );
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `You will be provided with a sentence. The sentence is:
                "${sourceText}". Your task are to Detect what language the sentence is in Translate the sentence into:
                "${selectedLanguage}"
                Do not return anything othter than the translated sentence.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return NextResponse.json({ translatedText: text }, { status: 200 });
  } catch (error) {
    console.log("Error: ", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
