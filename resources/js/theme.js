import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#3883db",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        h3: {
            margin: "2rem 0 1rem;",
        },
        h4: {
            margin: "2rem 0 1rem;",
        },
        body1: {
            wordBreak: "break-word",
        },
    },
    item: {
        maxWidth: "100%",
    },
});

export default theme;
