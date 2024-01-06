/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#eb6625",
                secondary: "#262626",
                hover: {
                    primary: "#d45b20",
                    secondary: "#1f1f1f"
                }
            }
        }
    },
    plugins: []
};
