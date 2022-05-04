import { StrictMode } from "react";
    import ReactDOM from "react-dom";
    
    import WebFont from "webfontloader";
    import App from "./App";

    WebFont.load({
        google: {
            families: ['Poppins', "Poppins:400,700,500,600","Montserrat:","Akaju:400","Inter:400"]
        }
      });

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <StrictMode>
        <App />
      </StrictMode>,
      rootElement
    );
    