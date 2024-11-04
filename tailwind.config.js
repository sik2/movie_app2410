/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                pretendard: [
                    'Pretendard',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'system-ui',
                    'Roboto',
                    "'Helvetica Neue'",
                    "'Segoe UI'",
                    "'Apple SD Gothic Neo'",
                    "'Noto Sans KR'",
                    "'Malgun Gothic'",
                    'sans-serif',
                ],
            },
            colors: {
                scrollbarTrack: '#e6e6e6',
                scrollbarThumb: '#9ea7af',
                scrollbarThumbHover: '#868b90',
                scrollbarThumbActive: '#65717b',
            },
        },
    },
    plugins: [],
}
