
import {
 GoogleGenerativeAI,
 HarmCategory,
 HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyALjbM4vlywwDW6SWiPpT6dp7C5WtjiRPY";
const genAI = new GoogleGenerativeAI(apiKey);

const safetySettings = [
 {
  category: HarmCategory.HARM_CATEGORY_HARASSMENT,
  threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
 },
 {
  category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
 },
];

const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp",
 safetySettings
});

const generationConfig = {
 temperature: 1,
 topP: 0.95,
 topK: 40,
 maxOutputTokens: 8192,
 responseMimeType: "text/plain",
};

async function runChat(prompt) {
 const chatSession = model.startChat({
  generationConfig,
  history: [
  ],
 });

 const result = await chatSession.sendMessage(prompt);
 const response = result.response
 console.log(result.response.text());
 return response.text();
}

export default runChat;