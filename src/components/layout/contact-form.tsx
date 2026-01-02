"use client";
import { useState } from 'react';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);

        const formData = new FormData(e.currentTarget);

        const response = await fetch("https://formspree.io/f/xdakgqjn", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setIsSubmitted(true);
        } else {
            alert("Oops! There was a problem. Please try again.");
        }
        setIsPending(false);
    };

    return (
        <section
            id="contact"
            className="py-24 bg-slate-900 text-white motion-safe:scroll-mt-20"
        >
            <div className="max-w-3xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                {!isSubmitted ? (
                    <>
                        <h2 className="text-4xl font-bold mb-4 italic tracking-tighter">Ready to shine?</h2>
                        <p className="text-slate-400 mb-12">Leave your details and let's illuminate your career path.</p>

                        <form onSubmit={handleSubmit} className="grid gap-6 text-left">
                            {/* Top Row: Name and Email */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <input required name="name" type="text" placeholder="Full Name" className="bg-slate-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                                <input required name="email" type="email" placeholder="Email Address" className="bg-slate-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>

                            {/* Second Row: Phone Number and Service Selection */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number (Optional)"
                                    className="bg-slate-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <div className="relative">
                                    <select name="service" className="w-full bg-slate-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                                        <option>What do you need help with?</option>
                                        <option>Full Career Pivot</option>
                                        <option>Resume & LinkedIn Polish</option>
                                        <option>Salary Negotiation Coaching</option>
                                    </select>
                                    {/* Custom Chevron for the select dropdown */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>

                            <textarea name="message" placeholder="Tell us about your target role..." rows={4} className="bg-slate-800 border-none rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                            >
                                {isPending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-12 animate-in fade-in zoom-in duration-500 text-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold mb-4 text-white">Message Received.</h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                            A Laylight coach will review your details and get back to you within 24 hours.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}