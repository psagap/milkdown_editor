import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/frame.css";

// Initialise the editor
const crepe = new Crepe({
  root: document.getElementById("app"),
  defaultValue: "Hello, Milkdown!",
});

crepe.create().then(() => console.log("Milkdown ready 🚀"));
