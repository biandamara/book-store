import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function CategoryMenus() {
  return (
    <>
      {/* side navagation start */}
      <div>
        {/* navigation bar start */}
        <Nav vertical>
          {/* navigation menu start */}
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Disabled Link</NavLink>
          </NavItem>
          {/* navigation menu end */}
        </Nav>
        {/* navigation bar end */}
      </div>
      {/* side navagation end */}
    </>
  );
}

export default CategoryMenus;
