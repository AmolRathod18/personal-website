"use client";

import { CONTACT, SOCIALS } from "../constants";
import { motion } from "motion/react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Contact = ({ onToast }) => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");

    const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("Please fill in name, email, and a short message.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError("Enter a valid email so I can reply.");
            return;
        }
        setError("");
        const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
        window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
        onToast?.("Opening your email client…");
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT.email);
            onToast?.("Email copied");
        } catch {
            onToast?.("Copy failed — tap the email instead");
        }
    };

    return (
        <div className="pb-20 pt-10">
            <h2 className="mb-4 text-center text-4xl font-bold text-white">
                Let’s <span className="text-sky-400">work</span>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-neutral-400">
                For professional inquiries, collaborations, or freelance opportunities, write here or press Ctrl+K and search “email”.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
                {[
                    { icon: FaMapMarkerAlt, title: "Location", value: CONTACT.address },
                    { icon: FaPhone, title: "Phone", value: CONTACT.phoneNo, href: `tel:${CONTACT.phoneNo.replace(/\s/g, "")}` },
                    { icon: FaEnvelope, title: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, copy: true },
                ].map((card) => (
                    <div
                        key={card.title}
                        className="rounded-2xl border border-sky-500/25 bg-slate-900/50 p-6 text-center"
                    >
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white">
                            <card.icon />
                        </div>
                        <h3 className="font-semibold text-sky-200">{card.title}</h3>
                        {card.href ? (
                            <a href={card.href} className="mt-1 block break-all text-sm text-neutral-300 hover:text-sky-300">
                                {card.value}
                            </a>
                        ) : (
                            <p className="mt-1 text-sm text-neutral-300">{card.value}</p>
                        )}
                        {card.copy && (
                            <button type="button" onClick={copyEmail} className="mt-2 text-xs text-sky-400 hover:underline">
                                Copy address
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto mt-12 max-w-2xl space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Your name"
                        className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
                    />
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="Your email"
                        className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
                    />
                </div>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="What should we build together?"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
                />
                {error && <p className="text-sm text-rose-400">{error}</p>}
                <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-sm font-bold text-white hover:from-sky-400"
                >
                    Send message
                </button>
            </motion.form>

            <div className="mt-10 flex justify-center gap-4">
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-sky-600 p-3 text-white" aria-label="LinkedIn">
                    <FaLinkedin size={22} />
                </a>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="rounded-full bg-neutral-800 p-3 text-white" aria-label="GitHub">
                    <FaGithub size={22} />
                </a>
            </div>
        </div>
    );
};

export default Contact;
