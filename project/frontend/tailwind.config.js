/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      customOne: "#39395f",
      customTwo: "#a9c25d",
      customThree: "#f5eec2",
      customfour: "#5f27cd",
      customfive: "#341f97",
      customsix: "#64CBD6",
      customseven: "#6a89cc",
      customeigth: "#d9e6e6",
      customenine: "#dff9fb",
      custometen: "#FFF44F",
      customeeleven: "#FFAA1D",
      grey: "#ecf0f1",
      greydark: "#bdc3c7",
      greydarko: "#95afc0",
      greydoubledarko: "#7E7E86",
      myWhite: "#ffffff",
      black: "#000000",
      greenyavash: "#00BB3A",
      greentoond: "#10982A",
      success: "#00BB3A",
      error: "#F44336",
    },
    extend: {
      fontFamily: {
        iransans: ["IRANSans", "sans-serif"],
      },
      backgroundImage: {
        "hero-patern": "url('./img/background.png')",
        "hero-paternTwo": "url('./img/background2.png')",
        "hero-paternThree": "url('./img/background3.png')",
      },
      boxShadow: {
        custom: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
