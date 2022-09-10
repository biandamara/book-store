import React from "react";
import {
  UncontrolledDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropMenu() {
  return (
    <UncontrolledDropdown group>
      <Button color="primary">Primary</Button>
      <DropdownToggle caret color="primary" />
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default DropMenu;
