import { createTheme } from "@mui/material/styles"
export const theme = createTheme({
    typography: {
        fontFamily: ['"Manrope"', "sans-serif"].join(","),
        // textTransform: "capitalize"
    },
    palette: {
        secondary: {
            main: "rgba(101, 228, 163, 1)",
        },
        primary: {
            main: "rgba(0, 0, 0, 1)",
        },
    },
})
