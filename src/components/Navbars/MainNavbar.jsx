import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Children } from "react";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarContent } from "../../utils/content";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LanguageIcon from "@mui/icons-material/Language";
import LaunchButton from "../Buttons/LaunchButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom'
//import Section6 from "../../containers/Section6";


const { Logo } = navbarContent;

// const LinkButton = ({ children, ...props }) => (
//   <Stack
//     direction="row"
//     alignItems="center"
//     spacing={0.2}
//     sx={{
//       cursor: "pointer",
//       color: "text.secondary",
//       "&:hover": { color: "text.primary" },
//     }}
//     {...props}
//   >
//     {children}
//   </Stack>
// );

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          {/* <img src={Logo} style={{ height: "100%", objectFit: "contain" }} /> */}
          <Typography variant={{ xs: "h3", sm: "h2", md: "h1" }} sx={{ fontSize: 60}}>
          FundDapp
        </Typography>

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              <LaunchButton sx={{ borderRadius: 3,marginTop:1 }} />
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
