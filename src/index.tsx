import { ThemeProvider } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import "shared/config/i18n/i18n";
import "app/styles/index.scss";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { StoreProvider } from "./app/providers/StoreProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
