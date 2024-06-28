import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import "./components/App.module.scss"

const root = document.getElementById("root")

if (!root){
    throw new Error("root is undefined");
}

const container = createRoot(root)

container.render(<App/>)