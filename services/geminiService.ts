import { GoogleGenAI } from "@google/genai";

// Initialize the client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const chatWithDalidaAssistant = async (userMessage: string, history: string[]): Promise<string> => {
  try {
    const systemInstruction = `
      أنت مساعد ذكي لـ "داليدا ورك سبيس" (Dalida Co-working Space) في المنصورة.
      
      معلومات المكان:
      - العنوان بالتفصيل: المنصورة - شارع الترعة - تقسيم السمنودي ٣.
      - رقم الهاتف: 01004294818.
      - الخدمات: انترنت سريع (فايبر)، تكييف، هدوء، مشروبات، غرف اجتماعات، أماكن للمذاكرة والعمل.
      - روابط السوشيال ميديا:
        * فيسبوك: https://www.facebook.com/dalidacoworkspace
        * انستجرام: https://instagram.com/dalidacoworkspace
        * تيك توك: https://www.tiktok.com/@dalidacoworkspace
      
      دورك:
      - الرد على استفسارات العملاء بلهجة مصرية ودودة ومحترفة.
      - مساعدة العملاء في اختيار نوع المكان المناسب (مشترك، خاص، اجتماعات).
      - إذا سأل العميل عن صور أو فيديوهات للمكان، وجهه لصفحة الفيسبوك أو الانستجرام.
      - تشجيعهم على الحجز وزيارة المكان.
      - الإجابة باختصار ووضوح.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `System Context: ${systemInstruction}\n\nConversation History: ${history.join('\n')}\n\nCurrent User Question: ${userMessage}` }] }
      ],
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "عذراً، لم أتمكن من فهم طلبك. هل يمكنك المحاولة مرة أخرى؟";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ تقني بسيط، يرجى المحاولة لاحقاً أو الاتصال بنا مباشرة.";
  }
};