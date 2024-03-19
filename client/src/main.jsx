import React from "react"
import ReactDom from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import store from "./app/store"
import "./index.css"
import { Toaster } from "react-hot-toast"

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
                <Toaster position="top-right" />
            </Router>
        </Provider>
    </React.StrictMode>,
)
