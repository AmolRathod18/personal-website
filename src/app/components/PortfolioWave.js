const PortfolioWave = () => (
    <svg
        aria-label="A friendly 3D-style cartoon waving hello"
        className="portfolio-wave"
        role="img"
        viewBox="0 0 320 340"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
    >
        <defs>
            <linearGradient id="wave-jacket" x1="92" y1="230" x2="246" y2="325" gradientUnits="userSpaceOnUse">
                <stop stopColor="#596166" />
                <stop offset="1" stopColor="#30363B" />
            </linearGradient>
            <linearGradient id="wave-skin" x1="119" y1="105" x2="199" y2="222" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDAB8" />
                <stop offset="1" stopColor="#D99B72" />
            </linearGradient>
            <linearGradient id="wave-shirt" x1="151" y1="234" x2="172" y2="310" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F2F1ED" />
                <stop offset="1" stopColor="#C9CBCD" />
            </linearGradient>
        </defs>

        <ellipse cx="158" cy="318" rx="91" ry="12" fill="#30363B" fillOpacity=".12" />

        <path
            d="M69 320c5-48 31-76 75-87l14 20 15-20c45 11 69 39 77 87H69Z"
            fill="url(#wave-jacket)"
        />
        <path d="m144 233 14 20 15-20 19 13-13 74h-41l-12-74 18-13Z" fill="url(#wave-shirt)" />
        <path d="m143 234 15 20-13 15-18-21 16-14Zm31 0-16 20 14 15 18-22-16-13Z" fill="#fff" fillOpacity=".8" />
        <path d="M131 207h55v39c-15 15-39 15-55 0v-39Z" fill="url(#wave-skin)" />

        <path
            d="M196 244c13 2 24-2 32-12l14-18 13 9-12 26c-8 18-23 28-43 29l-4-34Z"
            fill="url(#wave-jacket)"
        />

        <g className="portfolio-wave-arm">
            <path
                d="m224 224 14-30c8-15 13-30 13-44v-6c0-7 5-12 11-12 7 0 11 5 11 12v11l5-18c2-6 8-9 13-7 6 2 8 8 6 14l-4 14 7-9c4-5 10-6 15-2 4 4 4 10 1 14l-11 15c-9 13-15 29-19 45l-8 30-34 7-20-34Z"
                fill="url(#wave-skin)"
            />
            <path
                d="M250 150v-8c0-7 5-12 12-12 6 0 11 5 11 12v12m0-1 5-18c2-6 8-9 13-7 6 2 8 8 6 14l-4 14m2 0 7-9c4-5 10-6 15-2 4 4 4 10 1 14l-11 15"
                stroke="#B87956"
                strokeLinecap="round"
                strokeWidth="3"
            />
            <path d="m230 222 33 16-12 29-36-18 15-27Z" fill="#747C81" />
            <path d="m232 225 25 12" stroke="#9DA3A5" strokeLinecap="round" strokeWidth="3" />
        </g>

        <path
            d="M109 143c0-42 22-68 54-68 34 0 56 25 56 67v20c0 35-24 59-57 59s-53-24-53-58v-20Z"
            fill="url(#wave-skin)"
        />
        <path d="M109 151c-9-7-13-1-11 9 2 12 7 18 15 18l-4-27Zm106-1c9-7 13-1 11 9-2 12-7 18-15 18l4-27Z" fill="#E8B48E" />

        <path
            d="M108 145c-5-46 15-76 53-79 35-2 59 22 59 59-12-4-19-14-22-26-13 15-42 23-89 22l-1 24Z"
            fill="#303438"
        />
        <path d="M121 107c14-25 48-34 74-17-21-5-41 1-53 16-7 2-14 2-21 1Z" fill="#555B5E" />

        <path d="M130 158c5-5 13-5 18 0" stroke="#654735" strokeLinecap="round" strokeWidth="3" />
        <path d="M173 158c5-5 13-5 18 0" stroke="#654735" strokeLinecap="round" strokeWidth="3" />
        <ellipse cx="140" cy="169" rx="3.5" ry="5" fill="#303438" />
        <ellipse cx="181" cy="169" rx="3.5" ry="5" fill="#303438" />
        <circle cx="141" cy="167" r="1.2" fill="#fff" />
        <circle cx="182" cy="167" r="1.2" fill="#fff" />
        <ellipse cx="125" cy="180" rx="10" ry="5" fill="#D78170" fillOpacity=".2" />
        <ellipse cx="197" cy="180" rx="10" ry="5" fill="#D78170" fillOpacity=".2" />
        <path d="M151 186c6 7 16 7 22 0" stroke="#995E4D" strokeLinecap="round" strokeWidth="3" />
        <path d="m151 207 9 4 10-4" stroke="#C17A63" strokeLinecap="round" strokeWidth="2" />
        <path d="M85 319h145" stroke="#fff" strokeOpacity=".16" strokeWidth="2" />
    </svg>
);

export default PortfolioWave;
