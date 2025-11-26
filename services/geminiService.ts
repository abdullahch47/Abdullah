import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a production environment, this key should be handled securely.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

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
    if (!process.env.API_KEY) {
      return "I'm currently in demo mode and cannot process live requests without an API Key. Please contact Abdullah directly!";
    }

    const model = 'gemini-2.5-flash';
    
    // We use the lower-level generateContent for single turns or manage history manually if needed,
    // but here we will use the Chat session for context awareness.
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history, 
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
};