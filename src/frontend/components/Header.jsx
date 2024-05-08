import React, { useState } from "react";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Popover,
  Typography,
} from "@mui/material";
import {
  AccountCircleSharp,
  Menu,
  ShoppingCartSharp,
} from "@mui/icons-material";

export function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Typography color="blue.250">MAUPAPP</Typography>
        <IconButton
          size="large"
          aria-label="AccountCircleSharpIcon"
        ></IconButton>
        <ButtonGroup fullWidth={true}>
          <Button>O nas</Button>
          <Button onClick={handleClick}>Cele</Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button>Jak schudnąć</Button>
              <Button>Jak przytyć</Button>
              <Button>Jak nabrać masy mięśniowej</Button>
            </Box>
          </Popover>
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
