import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import {
  AccountCircleSharp,
  Menu,
  ShoppingCartSharp,
} from "@mui/icons-material";

export function Header() {
  return (
    <AppBar>
      <Toolbar
        variant="regular"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 24px 10px 24px",
          gap: "30px",
        }}
      >
        <IconButton size="large" aria-label="AccountCircleSharpIcon">
          <ShoppingCartSharp />
        </IconButton>
        <ButtonGroup fullWidth={true}>
          <Button>O nas</Button>
          <Button>Cele</Button>
          <Button>Plany Treningowe</Button>
          <Button>Kontakt</Button>
        </ButtonGroup>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <IconButton size="large" aria-label="AccountCircleSharpIcon">
            <AccountCircleSharp />
          </IconButton>
          <IconButton size="large" aria-label="AccountCircleSharpIcon">
            <ShoppingCartSharp />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
