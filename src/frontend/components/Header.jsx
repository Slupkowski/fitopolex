import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Popover,
} from "@mui/material";
import { AccountCircleSharp, ShoppingCartSharp } from "@mui/icons-material";

export function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickPlans = () => {
    navigate("/plans");
  };

  const handleClickContact = () => {
    navigate("/contact");
  };
  const handleClickLoseWeight = () => {
    navigate("/loseweight");
  };
  const handleClickGainMuscle = () => {
    navigate("/gainmuscle");
  };
  const handleClickGainWeight = () => {
    navigate("/gainweight");
  };
  const handleClickAbout = () => {
    navigate("/about");
  };
  const handleClickHome = () => {
    navigate("/");
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
        <h1 color="blue.250" onClick={handleClickHome}>
          MAUPAPP
        </h1>
        <IconButton
          size="large"
          aria-label="AccountCircleSharpIcon"
        ></IconButton>
        <ButtonGroup fullWidth={true}>
          <Button onClick={handleClickAbout}>O nas</Button>
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
              <Button onClick={handleClickLoseWeight}>Jak schudnąć</Button>
              <Button onClick={handleClickGainWeight}>Jak przytyć</Button>
              <Button onClick={handleClickGainMuscle}>
                Jak nabrać masy mięśniowej
              </Button>
            </Box>
          </Popover>
          <Button onClick={handleClickPlans}>Plany Treningowe</Button>
          <Button onClick={handleClickContact}>Kontakt</Button>
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
