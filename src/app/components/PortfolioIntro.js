"use client";

import { useEffect, useRef, useState } from "react";
import PortfolioWave from "./PortfolioWave";

const INTRO_DURATION = 5000;
const MAX_PAUSE_DURATION = 10000;
const EXIT_DURATION = 380;
const INTRO_STORAGE_KEY = "portfolio-intro-seen";

const PortfolioIntro = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const finishTimerRef = useRef(null);
    const pauseTimerRef = useRef(null);
    const exitTimerRef = useRef(null);
    const previousOverflowRef = useRef("");
    const remainingDurationRef = useRef(INTRO_DURATION);
    const timerStartedAtRef = useRef(0);
    const isPausedRef = useRef(false);
    const isClosingRef = useRef(false);
    const finishIntroRef = useRef(() => {});

    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(
                window.history.state,
                "",
                `${window.location.pathname}${window.location.search}`
            );
        }
        window.scrollTo(0, 0);

        if (
            window.sessionStorage.getItem(INTRO_STORAGE_KEY) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
            setIsVisible(false);
            return;
        }

        previousOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        finishIntroRef.current = () => {
            if (isPausedRef.current || isClosingRef.current) return;

            isClosingRef.current = true;
            window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
            setIsClosing(true);
            exitTimerRef.current = window.setTimeout(() => {
                setIsVisible(false);
                document.body.style.overflow = previousOverflowRef.current;
                window.scrollTo(0, 0);
            }, EXIT_DURATION);
        };
        timerStartedAtRef.current = window.performance.now();
        finishTimerRef.current = window.setTimeout(finishIntroRef.current, remainingDurationRef.current);
        setIsReady(true);

        return () => {
            window.clearTimeout(finishTimerRef.current);
            window.clearTimeout(pauseTimerRef.current);
            window.clearTimeout(exitTimerRef.current);
            document.body.style.overflow = previousOverflowRef.current;
        };
    }, []);

    const resumeIntro = () => {
        if (!isPausedRef.current || isClosingRef.current) return;

        window.clearTimeout(pauseTimerRef.current);
        isPausedRef.current = false;
        timerStartedAtRef.current = window.performance.now();
        finishTimerRef.current = window.setTimeout(finishIntroRef.current, remainingDurationRef.current);
        setIsPaused(false);
    };

    const skipIntro = () => {
        if (isClosingRef.current) return;

        isClosingRef.current = true;
        isPausedRef.current = false;
        window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
        window.clearTimeout(finishTimerRef.current);
        window.clearTimeout(pauseTimerRef.current);
        window.clearTimeout(exitTimerRef.current);
        setIsVisible(false);
        document.body.style.overflow = previousOverflowRef.current;
        window.scrollTo(0, 0);
    };

    const togglePause = () => {
        if (isClosingRef.current) return;

        if (isPausedRef.current) {
            resumeIntro();
            return;
        }

        window.clearTimeout(finishTimerRef.current);
        remainingDurationRef.current = Math.max(
            0,
            remainingDurationRef.current - (window.performance.now() - timerStartedAtRef.current)
        );
        isPausedRef.current = true;
        setIsPaused(true);
        pauseTimerRef.current = window.setTimeout(() => {
            if (isClosingRef.current || !isPausedRef.current) return;

            skipIntro();
        }, MAX_PAUSE_DURATION);
    };

    if (!isVisible) return null;

    return (
        <div
            className={`portfolio-intro ${isReady ? "is-ready" : ""} ${isClosing ? "is-closing" : ""} ${isPaused ? "is-paused" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio introduction"
        >
            <div className="portfolio-intro-actions">
                <button
                    type="button"
                    className="portfolio-intro-action portfolio-intro-pause"
                    onClick={togglePause}
                    aria-label={isPaused ? "Resume intro" : "Pause intro"}
                    aria-pressed={isPaused}
                    disabled={isClosing}
                >
                    {isPaused ? "Resume intro" : "Pause to read"}
                </button>
                <button
                    type="button"
                    className="portfolio-intro-action portfolio-intro-skip"
                    onClick={skipIntro}
                    disabled={isClosing}
                >
                    Skip intro
                </button>
            </div>

            <div className="portfolio-intro-layout">
                <div className="portfolio-intro-topline">
                    <span>Software engineering · Bengaluru, India</span>
                    <span>Portfolio / 2026</span>
                </div>

                <section className="portfolio-intro-main">
                    <div className="portfolio-intro-copy">
                        <p className="portfolio-intro-kicker">Field notes on building for the real world</p>
                        <h1 className="portfolio-intro-name">
                            Amol
                            <br />
                            <span>Rathod.</span>
                        </h1>
                        <p className="portfolio-intro-tagline">
                            Full stack engineering, thoughtful interfaces, dependable software.
                        </p>
                        <p className="portfolio-intro-welcome">
                            Hey, hello! Thanks for visiting my portfolio. I hope you find something here that feels useful,
                            thoughtful, or a little different.
                        </p>
                    </div>

                    <div className="portfolio-intro-index">
                        <span className="portfolio-intro-index-label">A note from Amol</span>
                        <PortfolioWave />
                        <span className="portfolio-intro-index-caption">Hello there — glad you’re here.</span>
                    </div>
                </section>

                <div className="portfolio-intro-bottomline">
                    <div
                        className="portfolio-intro-progress"
                        role="progressbar"
                        aria-label="Opening portfolio"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuetext="Opening the portfolio"
                    >
                        <span />
                    </div>
                    <p className="portfolio-intro-loading">Opening the portfolio</p>
                    <span className="portfolio-intro-coordinate">12°58′ N / 77°35′ E</span>
                </div>
            </div>
        </div>
    );
};

export default PortfolioIntro;
