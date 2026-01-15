"use client";

import {useState} from "react";
import {Check, CreditCard, X, Lock} from "lucide-react";
export default function Payment() {
    // No state needed anymore since we are linking directly to Stripe

    const plans = [
        {
            id: 1,
            name: "The Resume Audit",
            price: "150",
            period: "one-time",
            desc: "Perfect for those who just need their documents polished for ATS.",
            features: [
                "Resume Review",
                "LinkedIn Review",
                "Cover Letter Template",
            ],
            // Replace these with your actual Stripe Payment Link URLs
            link: "https://buy.stripe.com/test_1",
            popular: false
        },
        {
            id: 2,
            name: "Total Career Pivot",
            price: "400",
            period: "one-time",
            desc: "A complete overhaul for your next big jump into a new industry.",
            features: [
                "Everything in Resume Audit",
                "2x 60min Strategy Calls",
                "Mock Interview Session (60min)",
                "Salary Negotiation Scripts",
                "Direct Email Access"
            ],
            link: "https://buy.stripe.com/test_2",
            popular: true
        },
        {
            id: 3,
            name: "Executive Retainer",
            price: "600",
            period: "month",
            desc: "Unlimited access. I become your personal career agent.",
            features: [
                "Everythign in lower tiers",
                "Unlimited Coaching Calls",
                "Direct WhatsApp Access",
                "Networking Strategy & Intros",
                "Offer Letter Legal Review",
                "Onboarding Support (First 30 Days)"
            ],
            link: "https://buy.stripe.com/test_3",
            popular: false
        }
    ];

    return (
        <section id="payment" className="py-24 bg-slate-950 relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">Investment</h2>
                    <p className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Invest in your future earning potential.
                    </p>
                    <p className="text-slate-400 text-lg">
                        Most clients see a <span className="text-yellow-400 font-semibold">20-40% salary increase</span> in their new role.
                        Choose the level of support you need.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                                plan.popular
                                    ? 'bg-slate-900 border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.1)]'
                                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm h-10">{plan.desc}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                                    {plan.period === 'month' && <span className="text-slate-500 ml-2">/month</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-slate-300 text-sm">
                                        <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-3">
                                {/* CHANGE: This is now a direct link (<a>) instead of a button.
                  It will navigate directly to the plan.link (Stripe URL).
                */}
                                <a
                                    href={plan.link}
                                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                                        plan.popular
                                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
                                            : 'bg-white text-slate-900 hover:bg-slate-200'
                                    }`}
                                >
                                    <CreditCard className="w-4 h-4 mr-2" />
                                    Secure Checkout
                                </a>

                                <div className="text-center">
                                    <span className="text-xs text-slate-600">or </span>
                                    <a href={plan.link} className="text-xs text-slate-500 hover:text-blue-400 underline decoration-slate-700 underline-offset-4">
                                        pay via invoice
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}