import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function CategoryMenus() {
  return (
    <>
      <div>
        {/* side navagation start */}
        <h3>Category</h3>
        <hr />
        <div className="justify-content-start">
          {/* navigation bar start */}
          <Nav vertical>
            {/* navigation item start */}
            <NavItem>
              <NavLink href="/happiness-mindfulness">
                Happiness & Mindfulness
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Career & Business</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Productivity & Time Management</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Society & Politics</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Investment & Finance</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Art & Design</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Science & Fiction</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Technology</NavLink>
            </NavItem>
            {/* navigation item end */}
          </Nav>
          {/* navigation bar end */}
        </div>
        {/* side navagation end */}
      </div>
    </>
  );
}

export default CategoryMenus;
