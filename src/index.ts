import "./styles/main.scss";
import tools from "./data/tools.json";
import { renderTools, setupThemeToggle } from "./app";

renderTools(tools);
setupThemeToggle();
