import { createTheme } from "@mui/material/styles";
import { createComponents } from "./components";
import { createPalette } from "./palette";

const theme = createTheme({
  components: createComponents(),
  palette: createPalette(),
});

export default theme;
