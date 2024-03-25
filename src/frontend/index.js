import { StrictMode } from "react";
import App from './App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme/index';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
