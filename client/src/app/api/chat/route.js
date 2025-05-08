import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
    const body = await req.json();
    const message = body.message;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });
        const reply = response.choices[0].message.content; // Get the AI's reply
        return new Response(JSON.stringify({ reply }), { status: 200 });
    } catch (error) {
        if (error?.response?.status === 429) {
            // Handle rate limit exceeded error
            return new Response(
                JSON.stringify({
                    reply: "Sorry, the service is currently unavailable due to high traffic. Please try again later.",
                }),
                { status: 429 }
            );
        }
        console.error("Error:", error);
        return new Response(
            JSON.stringify({ reply: "Error fetching AI response. Please try again later." }),
            { status: 500 }
        );
    }
}
