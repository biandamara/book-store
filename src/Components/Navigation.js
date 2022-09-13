import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

// import component
// import DropMenu from "../Components/Dropdown";
import SearchBar from "../Components/SearchBar";

// import assets
import LogoBrand from "../Assets/Images/logo-brand.png";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import css from "../Assets/Styles/Navigation.module.css";

function Navigation() {
  return (
    <>
      {/* navigation bar start */}
      <Navbar className={`navbar ${css.navbar}`}>
        <div className="container">
          {/* brand start */}
          <div className="row align-items-center">
            <NavbarBrand className={`col-2 navbar-brand ${css.title}`} href="/">
              <img
                className={`d-inline-block align-items-center ${css.image}`}
                src={LogoBrand}
                alt="Logo"
              />
              Book Store
            </NavbarBrand>
            {/* brand end */}

            {/* navigation menus start */}
            <div className="col-6">
              <Nav navbar>
                <NavItem className="d-flex justify-content-center">
                  <NavLink className="flex-fill">
                    <SearchBar />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            {/* navigation menus end */}

            {/* account start */}
            <div className="col">
              <Nav className="row d-flex justify-content-end">
                <NavItem className="col">
                  <NavLink href="/category">Category</NavLink>
                </NavItem>

                <NavItem className="col">
                  <NavLink href="/bookmark">Bookmark</NavLink>
                </NavItem>

                <NavItem className="col">
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Nav>
            </div>
            {/* account end */}
          </div>
        </div>
      </Navbar>
      {/* navigation bar end */}
    </>
  );
}

export default Navigation;
