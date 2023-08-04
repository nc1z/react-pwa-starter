import { createTheme, responsiveFontSizes } from "@mui/material/styles"

export enum ThemeColors {
    background = "#30363d",
    primary = "#232323",
    secondary = "#8EBBFF",
    tertiary = "#f8f5f2",
    success = "#57CA22",
    warning = "#FFA319",
    error = "#FF1943",
    info = "#33C2FF",
    black = "#223354",
    white = "#ffffff",
}

let theme = createTheme({
    typography: {
        fontFamily: ["proxima-nova", "sans-serif"].join(","),
    },
    palette: {
        background: {
            default: ThemeColors.background,
        },
        primary: {
            main: ThemeColors.primary,
        },
        secondary: {
            main: ThemeColors.secondary,
        },
        success: {
            main: ThemeColors.success,
        },
        warning: {
            main: ThemeColors.warning,
        },
        error: {
            main: ThemeColors.error,
        },
        info: {
            main: ThemeColors.info,
        },
    },
    components: {
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: ThemeColors.primary,
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: ThemeColors.white,
                    "&.Mui-selected": {
                        color: ThemeColors.secondary,
                    },
                },
                label: {
                    color: ThemeColors.white,
                    "&.Mui-selected": {
                        color: ThemeColors.secondary,
                    },
                },
            },
        },
    },
})

theme = responsiveFontSizes(theme)

export default theme
