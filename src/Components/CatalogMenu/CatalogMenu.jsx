import React from "react";
import { Nav, NavItem, NavLink} from "reactstrap";

import "./catalogMenu.sass"


function CatalogMenu(props) {


  return (
    <Nav
      justified
      tabs
      className="mt55"
    >
      <NavItem>
        <NavLink
          href="#"
          onClick={() => {
            // eslint-disable-next-line react/prop-types
            props.onTypeSelected("Bayonet")
          }}>
          Штыковые
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#"
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          props.onTypeSelected("For snow")
          }}>
          Для снега
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="#"
          onClick={() => {
            // eslint-disable-next-line react/prop-types
            props.onTypeSelected("Scoop")
          }}
        >
          Совковые
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default CatalogMenu;