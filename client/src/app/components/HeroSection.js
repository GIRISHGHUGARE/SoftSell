"use client";

import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa6";

export default function HeroSection() {
    return (
        <section className="bg-white dark:bg-gray-950 min-h-screen">
            <div className="relative isolate px-4 pt-28 sm:pt-36 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="flex justify-center mb-4">
                        <FaRocket className="text-indigo-600 dark:text-indigo-400 text-4xl" />
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                        Sell Unused Software Licenses Fast with SoftSell
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                        We help individuals and businesses turn unused licenses into real cash with fast, transparent evaluations.
                    </p>

                    <div className="mt-10 flex justify-center gap-4 flex-wrap">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 text-sm font-medium shadow transition"
                        >
                            Get a Quote <FaArrowRight className="text-sm" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
