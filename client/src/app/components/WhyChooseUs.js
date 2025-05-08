"use client";

import { motion } from "framer-motion";
import {
    FaShieldAlt,
    FaBolt,
    FaHandshake,
    FaChartLine,
} from "react-icons/fa";

const features = [
    {
        title: "Secure Transactions",
        icon: <FaShieldAlt className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
        description: "All license transfers are verified for security and authenticity.",
    },
    {
        title: "Fast Payouts",
        icon: <FaBolt className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
        description: "Receive your money within 24 hours of approval.",
    },
    {
        title: "Trusted Partners",
        icon: <FaHandshake className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
        description: "SoftSell is trusted by 100+ businesses and software providers.",
    },
    {
        title: "Best Market Rates",
        icon: <FaChartLine className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />,
        description: "Get accurate valuations based on current market demand.",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-us" className="bg-gray-50 dark:bg-gray-950 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    Why Choose Us
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
                    Here's why SoftSell is the go-to platform for license resale.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition text-center"
                    >
                        <div className="flex justify-center">{feature.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
