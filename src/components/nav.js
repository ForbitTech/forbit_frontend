import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { Link, animateScroll as scroll } from "react-scroll";
import "./header.css";
import { useHistory } from "react-router";
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Nav = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const conman = () => {
    history.push({
      pathname: "/PrivacyPolicy/Construction_Manager",
    });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          className="header"
          style={{
            boxShadow: "initial",
          }}
        >
          <Toolbar>
            {/* <img src={Image} alt="logo" style={{ height: "80px" }} /> */}

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Button color="white">
                <Link
                  style={{ activeClass: "1px solid black", color: "white" }}
                  activeClass="active"
                  to="marginTop"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </Button>
              <Button color="Black">
                <Link
                  style={{ activeClass: "1px solid white", color: "white" }}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </Button>

              <Button color="Black">
                {" "}
                <Link
                  style={{ activeClass: "1px solid white", color: "white" }}
                  activeClass="active"
                  to="Service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
                </Link>
              </Button>

              <Button color="Black">
                {" "}
                <Link
                  style={{ activeClass: "1px solid white", color: "white" }}
                  activeClass="active"
                  to="Project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </Button>

              <Button color="Black">
                {" "}
                <Link
                  style={{ activeClass: "1px solid white", color: "white" }}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Button>
              <Button
                style={{ activeClass: "1px solid white", color: "white" }}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Privacy Policy
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => conman()}>
                  Construction Manager
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
              </Menu>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Nav;
