"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { CONTACT, SOCIALS } from "../constants";

const Contact = ({ onToast }) => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");

    const onChange = (event) => {
        setForm((currentForm) => ({ ...currentForm, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("Please fill in your name, email, and a short message.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setError("Enter a valid email address so I can reply.");
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
            onToast?.("Copy failed — select the email address to copy it");
        }
    };

    const contactDetails = [
        { icon: FaMapMarkerAlt, title: "Based in", value: CONTACT.address },
        {
            icon: FaEnvelope,
            title: "Email",
            value: CONTACT.email,
            href: `mailto:${CONTACT.email}`,
            action: "Copy",
            onAction: copyEmail,
        },
        {
            icon: FaPhone,
            title: "Phone",
            value: CONTACT.phoneNo,
            href: `tel:${CONTACT.phoneNo.replace(/\s/g, "")}`,
        },
    ];

    return (
        <div className="pb-24 pt-12">
            <div className="grid gap-12 border-b border-neutral-300 pb-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                <div className="flex flex-col">
                    <div>
                        <p className="field-eyebrow mb-4">08 / Get in touch</p>
                        <h2 className="field-display max-w-xl text-4xl leading-[1.05] text-neutral-900 sm:text-6xl">
                            Good work starts with a{" "}
                            <span className="italic text-neutral-500">conversation.</span>
                        </h2>
                        <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
                            Have a role, a project, or an idea worth exploring? Send a note and tell me what you have in mind.
                        </p>
                    </div>

                    <div className="mt-10 border-t border-neutral-300">
                        {contactDetails.map(({ icon: Icon, title, value, href, action, onAction }) => (
                            <div
                                key={title}
                                className="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-neutral-300 py-4"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600">
                                    <Icon aria-hidden="true" size={14} />
                                </span>
                                <div className="min-w-0">
                                    <p className="field-eyebrow mb-1 text-[9px]">{title}</p>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="block break-all text-sm font-medium text-neutral-800 transition hover:text-neutral-500"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-medium text-neutral-800">{value}</p>
                                    )}
                                </div>
                                {action && (
                                    <button
                                        type="button"
                                        onClick={onAction}
                                        className="text-xs font-medium text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-900"
                                    >
                                        {action}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between gap-4">
                        <p className="field-eyebrow text-[9px]">Elsewhere on the web</p>
                        <div className="flex gap-2">
                            <a
                                href={SOCIALS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn (opens in a new tab)"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-500 hover:bg-white/70"
                            >
                                <FaLinkedin aria-hidden="true" size={15} />
                            </a>
                            <a
                                href={SOCIALS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub (opens in a new tab)"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-500 hover:bg-white/70"
                            >
                                <FaGithub aria-hidden="true" size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-neutral-200 bg-white/75 p-5 shadow-[0_16px_40px_rgba(40,44,48,0.07)] sm:p-8"
                >
                    <div className="mb-7 flex items-start justify-between gap-4 border-b border-neutral-200 pb-5">
                        <div>
                            <p className="field-eyebrow mb-2 text-[9px]">Start a conversation</p>
                            <h3 className="field-display text-2xl text-neutral-900 sm:text-3xl">Send a message</h3>
                        </div>
                        <span className="hidden border border-neutral-300 px-2 py-1 font-mono text-[10px] text-neutral-500 sm:inline">
                            RESPONSE / EMAIL
                        </span>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block text-xs font-medium text-neutral-700">
                            Your name
                            <input
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                placeholder="Name"
                                autoComplete="name"
                                required
                                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white/70 px-3.5 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-500 focus:border-neutral-600"
                            />
                        </label>
                        <label className="block text-xs font-medium text-neutral-700">
                            Email address
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChange}
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white/70 px-3.5 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-500 focus:border-neutral-600"
                            />
                        </label>
                    </div>

                    <label className="mt-5 block text-xs font-medium text-neutral-700">
                        What would you like to discuss?
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={onChange}
                            rows={6}
                            placeholder="A little context helps me get back to you."
                            required
                            className="mt-2 w-full resize-y rounded-lg border border-neutral-300 bg-white/70 px-3.5 py-3 text-sm leading-6 text-neutral-900 outline-none transition placeholder:text-neutral-500 focus:border-neutral-600"
                        />
                    </label>

                    {error && (
                        <p role="alert" className="mt-3 text-sm text-rose-600">
                            {error}
                        </p>
                    )}

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs leading-5 text-neutral-500">
                            This opens your email app with the message ready to send.
                        </p>
                        <button
                            type="submit"
                            className="contact-submit inline-flex shrink-0 items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                        >
                            Open email draft <span aria-hidden="true">↗</span>
                        </button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
