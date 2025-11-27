import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// Only initialize the client if a key is available to avoid runtime errors.
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const SYSTEM_INSTRUCTION = `
You are an AI Assistant for Abdullah Munir's personal portfolio website.
Abdullah is a Laravel Expert with 3 years of professional experience.
His core skills include: Laravel, PHP, MySQL, Redis, Docker, Vue.js, and React.
He specializes in building scalable backend systems, RESTful APIs, and SaaS architectures.
He is passionate about clean code, TDD (Test Driven Development), and performance optimization.

Your goal is to answer visitor questions about Abdullah's professional background, skills, and availability.
Keep your answers concise, professional, and friendly. 
If asked about contact info, refer them to the contact form on the website.
Do not hallucinate projects that are not mentioned. If you don't know something specific, just say you can't answer that but suggest contacting him directly.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  try {
    if (!genAI) {
      return "I'm currently in demo mode and cannot process live requests without an API Key. Please contact Abdullah directly!";
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({ history });

    const result = await chat.sendMessage(message);
    return result.response.text() || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};