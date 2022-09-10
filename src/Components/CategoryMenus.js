import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

// import styles
import css from "../Assets/Styles/CategoryMenus.module.css";

function CategoryMenus() {
  return (
    <>
      <div className="container">
        {/* side navagation start */}
        <div className={css.container}>
          <div className="text-left">
            <h3>Category</h3>
            <hr />
          </div>

          <div className="justify-content-start">
            {/* navigation bar start */}
            <Nav className="row text-left" vertical>
              {/* navigation item start */}
              <NavItem>
                <NavLink className="col" href="#">
                  Happiness & Mindfulness
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="col" href="#">
                  Career & Business
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="col" href="#">
                  Productivity & Time Management
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="col" href="#">
                  Society & Politics
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="col" href="#">
                  Investment & Finance
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="col" href="#">
                  Art & Design
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="col" href="#">
                  Science & Fiction
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="col" href="#">
                  Technology
                </NavLink>
              </NavItem>
              {/* navigation item end */}
            </Nav>
            {/* navigation bar end */}
          </div>
          {/* side navagation end */}
        </div>
      </div>
    </>
  );
}

export default CategoryMenus;
