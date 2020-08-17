import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React from "react";
import { render } from "react-dom";
import { ConfirmProvider } from "material-ui-confirm";
import FilePanel from "./components/FilePanel";
import { Snackbar } from "./components/Shared";
import theme from "./theme";
import snackbarContext from "./contexts/snackbarContext";
import popupContext from "./contexts/popupContext";

render(
    <div data-test="component-app">
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Typography variant="h3" component="h1">
                    Dashboard
                </Typography>
                <snackbarContext.SnackbarProvider>
                    <ConfirmProvider>
                        <popupContext.PopupProvider>
                            <FilePanel />
                        </popupContext.PopupProvider>
                    </ConfirmProvider>
                    <Snackbar />
                </snackbarContext.SnackbarProvider>
            </Container>
        </ThemeProvider>
    </div>,
    document.getElementById("app")
);
