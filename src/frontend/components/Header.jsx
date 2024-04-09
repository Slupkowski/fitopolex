import { Box, Button, AppBar, Toolbar, IconButton } from "@mui/material";
import {
  AccountCircleSharp,
  Menu,
  ShoppingCartSharp,
} from "@mui/icons-material";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
              width: 1,
            }}
          >
            <Button variant="contained" color="warning">
              O nas
            </Button>
            <Button>Cele</Button>
            <Button>Plany Treningowe</Button>
            <Button>Kontakt</Button>
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
    </Box>
  );
}
