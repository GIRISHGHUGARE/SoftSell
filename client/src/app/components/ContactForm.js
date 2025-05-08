"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const licenseOptions = ["Office Suite", "Design Software", "Antivirus", "Dev Tools", "Other"];

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email is required";
        if (!form.company.trim()) newErrors.company = "Company is required";
        if (!form.licenseType) newErrors.licenseType = "Please select a license type";
        if (!form.message.trim()) newErrors.message = "Message cannot be empty";
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = validate();
        if (Object.keys(validation).length > 0) {
            setErrors(validation);
        } else {
            setErrors({});
            alert("Form submitted (pretend it's sent)!");
            setForm({ name: "", email: "", company: "", licenseType: "", message: "" });
        }
    };

    return (
        <section id="contact" className="bg-gray-50 dark:bg-gray-950 py-20 px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    Get in Touch
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Fill out the form and we’ll get back to you with your license evaluation.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.company && <p className="text-sm text-red-500 mt-1">{errors.company}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">License Type</label>
                    <select
                        name="licenseType"
                        value={form.licenseType}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select...</option>
                        {licenseOptions.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                        ))}
                    </select>
                    {errors.licenseType && <p className="text-sm text-red-500 mt-1">{errors.licenseType}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 block w-full rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white p-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
