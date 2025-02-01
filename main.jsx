import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
