"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Jane Smith",
        role: "IT Manager",
        company: "TechNova Inc.",
        quote:
            "SoftSell made it incredibly easy to offload unused software. We got a fair price and fast payout — couldn’t be happier!",
    },
    {
        name: "Mark Johnson",
        role: "Founder",
        company: "CloudCore Solutions",
        quote:
            "I was sitting on licenses we didn’t need anymore. SoftSell helped us turn that into real money, quickly and securely.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-white dark:bg-gray-950 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    What Our Clients Say
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
                    Real experiences from people who’ve sold their licenses through SoftSell.
                </p>
            </div>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition"
                    >
                        <FaQuoteLeft className="text-indigo-600 dark:text-indigo-400 text-2xl mb-4" />
                        <p className="text-gray-700 dark:text-gray-300 text-md mb-6 italic">“{t.quote}”</p>
                        <div className="text-sm text-gray-800 dark:text-gray-200 font-semibold">
                            {t.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {t.role}, {t.company}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
