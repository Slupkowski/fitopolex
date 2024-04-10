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
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "Center",
            gap: 2,
          }}
        >
          <ButtonGroup>
            <Button variant="contained" color="warning">
              O nas
            </Button>
            <Button>Cele</Button>
            <Button>Plany Treningowe</Button>
            <Button>Kontakt</Button>
          </ButtonGroup>
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="red"
          aria-label="AccountCircleSharpIcon"
          sx={{ mr: 2 }}
        >
          <AccountCircleSharp />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="red"
          aria-label="AccountCircleSharpIcon"
          sx={{ mr: 2 }}
        >
          <ShoppingCartSharp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
