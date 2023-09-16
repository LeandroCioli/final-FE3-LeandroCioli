import { createContext } from "react";

export const themes = {
    light:{
        font: "black",
        background: "white",
        backCard: "#d8ddf185"
    },
    dark: {
        font: "white",
        background:"#393E46",
        backCard: "#2222489c"
    }
};

const ThemeContext = createContext(themes.light);

export default ThemeContext;