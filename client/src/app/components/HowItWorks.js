"use client";

import { motion } from "framer-motion";
import { FaUpload, FaMoneyCheckAlt, FaSearchDollar, FaArrowRight } from "react-icons/fa";

const steps = [
    {
        title: "Upload License",
        icon: <FaUpload className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4" />,
        description: "Submit the license details of the software you no longer use.",
    },
    {
        title: "Get Valuation",
        icon: <FaSearchDollar className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4" />,
        description: "We analyze the market value and send you a fair price estimate.",
    },
    {
        title: "Get Paid",
        icon: <FaMoneyCheckAlt className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4" />,
        description: "Accept the offer, and we’ll send your money within 24 hours.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-white dark:bg-gray-950 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    How It Works
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
                    Just 3 simple steps to turn your unused licenses into cash.
                </p>
            </div>
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md p-6 w-full lg:w-[30%] text-center"
                    >
                        <div className="flex justify-center">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                        {index < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 right-[-35px] transform -translate-y-1/2 text-2xl text-gray-400 dark:text-gray-600">
                                <FaArrowRight className="text-2xl" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
