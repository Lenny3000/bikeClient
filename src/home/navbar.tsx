import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
export interface SitebarProps{
    clearToken:() => void
}
const Sitebar = (props:SitebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink to="/trails">
                        <Button style={{marginRight: "10px"}} >Trails</Button>

                    </NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink to="/places">
                        <Button style={{marginRight: "10px"}} >Places</Button>

                    </NavLink>
                    </NavItem>
                    <NavItem>
                        <Button onClick={props.clearToken}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Sitebar;