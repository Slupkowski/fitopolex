import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  ButtonGroup,
  Popover,
} from "@mui/material";

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
        <h1
          color="blue.250"
          onClick={handleClickHome}
          style={{ cursor: "pointer" }}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          MAUPAPP
        </h1>
        <ButtonGroup fullWidth={true}>
          {/* <Button onClick={handleClick}>Cele</Button>
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
          </Popover> */}
          <Button onClick={handleClickPlans}>Plany Treningowe</Button>
          <Button onClick={handleClickAbout}>Atlas Ćwiczeń</Button>

          <Button onClick={handleClickContact}>Kontakt</Button>
        </ButtonGroup>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        ></Box>
      </Toolbar>
    </AppBar>
  );
}
