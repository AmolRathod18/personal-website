"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CONTACT, EXPERIENCES, HERO_STRINGS, PROJECTS, SOCIALS, STATUS } from "../constants";

const WELCOME = [
    "amol@portfolio — interactive shell",
    'Type "help" to see commands. This is a real interpreter, not a mock.',
];

const DevTerminal = () => {
    const [lines, setLines] = useState(() => WELCOME.map((text) => ({ type: "sys", text })));
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [histIndex, setHistIndex] = useState(-1);
    const endRef = useRef(null);
    const inputRef = useRef(null);

    const catalog = useMemo(
        () => ({
            help: "List available commands",
            whoami: "Short bio",
            now: "What I am building / open to",
            skills: "Core stack",
            projects: "Project titles + links",
            experience: "Recent work",
            contact: "Email, phone, location",
            social: "GitHub & LinkedIn",
            hire: "How to work together",
            cv: "CV download path",
            clear: "Clear the screen",
        }),
        []
    );

    useEffect(() => {
        endRef.current?.scrollIntoView({ block: "nearest" });
    }, [lines]);

    const print = (entries) => {
        setLines((prev) => [...prev, ...entries]);
    };

    const run = (raw) => {
        const cmd = raw.trim().toLowerCase();
        print([{ type: "in", text: `$ ${raw}` }]);
        if (!cmd) return;

        if (cmd === "clear") {
            setLines([]);
            return;
        }
        if (cmd === "help") {
            print(
                Object.entries(catalog).map(([k, v]) => ({
                    type: "out",
                    text: `${k.padEnd(12)} ${v}`,
                }))
            );
            return;
        }
        if (cmd === "whoami") {
            print([
                { type: "out", text: "Amol Rathod · Full Stack Developer (MERN + Flask)" },
                { type: "out", text: HERO_STRINGS.join(" · ") },
                { type: "out", text: STATUS.location },
            ]);
            return;
        }
        if (cmd === "now") {
            print([
                { type: "out", text: `status     ${STATUS.availability}` },
                { type: "out", text: `building   ${STATUS.building}` },
            ]);
            return;
        }
        if (cmd === "skills") {
            print([
                {
                    type: "out",
                    text: "React · Node · Express · MongoDB · Flask · MySQL · JWT · AWS · Tailwind",
                },
            ]);
            return;
        }
        if (cmd === "projects") {
            print(
                PROJECTS.map((p) => ({
                    type: "out",
                    text: `${p.title}  →  ${p.link}`,
                }))
            );
            return;
        }
        if (cmd === "experience") {
            print(
                EXPERIENCES.map((e) => ({
                    type: "out",
                    text: `${e.year} · ${e.role} @ ${e.company}`,
                }))
            );
            return;
        }
        if (cmd === "contact") {
            print([
                { type: "out", text: CONTACT.email },
                { type: "out", text: CONTACT.phoneNo },
                { type: "out", text: CONTACT.address },
            ]);
            return;
        }
        if (cmd === "social") {
            print([
                { type: "out", text: SOCIALS.github },
                { type: "out", text: SOCIALS.linkedin },
            ]);
            return;
        }
        if (cmd === "hire") {
            print([
                {
                    type: "out",
                    text: "I am open to full-stack roles and freelance. Press Ctrl+K → Contact, or type: contact",
                },
            ]);
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            return;
        }
        if (cmd === "cv") {
            print([{ type: "out", text: "/Amol_Rathod_CV.pdf — opening…" }]);
            window.open("/Amol_Rathod_CV.pdf", "_blank");
            return;
        }

        print([
            {
                type: "err",
                text: `command not found: ${cmd}. Try "help".`,
            },
        ]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current?.value ?? input;
        setInput("");
        setHistIndex(-1);
        if (value.trim()) setHistory((h) => [value, ...h].slice(0, 40));
        run(value);
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSubmit(e);
            return;
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            const next = Math.min(histIndex + 1, history.length - 1);
            if (history[next]) {
                setHistIndex(next);
                setInput(history[next]);
            }
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = histIndex - 1;
            if (next < 0) {
                setHistIndex(-1);
                setInput("");
            } else {
                setHistIndex(next);
                setInput(history[next]);
            }
        }
        if (e.key === "Tab") {
            e.preventDefault();
            const match = Object.keys(catalog).find((c) => c.startsWith(input.toLowerCase()));
            if (match) setInput(match);
        }
    };

    return (
        <div className="py-16 sm:py-20">
            <div className="mb-8 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
                    Unique feature
                </p>
                <h2 className="section-title text-white">Talk to the portfolio</h2>
                <p className="section-description mt-3 text-center">
                    A live command line. Recruiters can type <span className="text-sky-300">projects</span>,{" "}
                    <span className="text-sky-300">hire</span>, or <span className="text-sky-300">cv</span> instead of
                    hunting through sections. Tab completes. Arrow keys recall history.
                </p>
            </div>

            <div
                className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sky-500/25 bg-[#05080f] shadow-[0_0_80px_rgba(14,165,233,0.08)]"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    <span className="ml-3 font-mono text-xs text-neutral-500">zsh · amol@rathod</span>
                </div>
                <div className="h-72 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-6 sm:h-80">
                    {lines.map((line, i) => (
                        <div
                            key={i}
                            className={`break-all ${
                                line.type === "in"
                                    ? "text-sky-300"
                                    : line.type === "err"
                                      ? "text-rose-400"
                                      : line.type === "sys"
                                        ? "text-neutral-500"
                                        : "text-neutral-200"
                            }`}
                        >
                            {line.text}
                        </div>
                    ))}
                    <form onSubmit={onSubmit} className="mt-1 flex items-center gap-2 text-sky-200">
                        <span className="text-emerald-400">➜</span>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            className="flex-1 bg-transparent outline-none"
                            autoComplete="off"
                            spellCheck={false}
                            aria-label="Terminal command"
                        />
                    </form>
                    <div ref={endRef} />
                </div>
            </div>
        </div>
    );
};

export default DevTerminal;
