import React from "react"
import ReactDom from "react-dom/client"
import { Provider } from "react-redux"
import store from "./app/store"
import "./index.css"
import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import routes from "./routes/index"

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes} />
            <Toaster position="top-right" />
        </Provider>
    </React.StrictMode>,
)
