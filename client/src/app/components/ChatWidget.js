"use client";
import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
        setInput("");

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg }),
            });

            const data = await res.json();
            setMessages((prev) => [...prev, { sender: "ai", text: data.reply }]);
        } catch (err) {
            setMessages((prev) => [...prev, { sender: "ai", text: "Sorry, something went wrong." }]);
        }
    };

    const handlePromptClick = (prompt) => setInput(prompt);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!open ? (
                <button
                    onClick={() => setOpen(true)}
                    className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
                    aria-label="Open chat"
                >
                    <FaComments size={20} />
                </button>
            ) : (
                <div className="w-80 max-h-[500px] bg-white dark:bg-gray-900 border rounded shadow-lg flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center p-3 font-semibold bg-blue-600 text-white">
                        <span>💬 SoftSell Assistant</span>
                        <button onClick={() => setOpen(false)} aria-label="Close chat">
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="p-2 overflow-y-auto flex-1">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`my-1 text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}
                            >
                                <div
                                    className={`inline-block p-2 rounded ${msg.sender === "user"
                                        ? "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white"
                                        : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Prompts */}
                    <div className="p-2 border-t bg-gray-50 dark:bg-gray-800">
                        <div className="text-xs mb-1 text-gray-600 dark:text-gray-300">Try asking:</div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "How do I sell my license?",
                                "What license types do you accept?",
                                "How long does it take to get paid?",
                            ].map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePromptClick(q)}
                                    className="text-xs px-2 py-1 bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-700 text-blue-800 dark:text-white rounded"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="flex border-t">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            className="flex-1 p-2 text-sm border-none focus:outline-none bg-transparent"
                            placeholder="Ask me something..."
                        />
                        <button
                            onClick={sendMessage}
                            className="px-4 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
