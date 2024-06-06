import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalContextProvider } from "./context/global";
import GlobalStyle from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <GlobalStyle />
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>
</React.StrictMode>
);