import React, { useState } from 'react';
import Basket from '../Basket/Basket';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';

import './header.sass'
import kopatych from '../../icon/kopatych.png'

function Header({basketItem, addItem, scrollToMyRef, ...args}) {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("Москва")

  const toggle = () => setIsOpen(!isOpen);

  

  

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/"><img src={kopatych} alt="kopatych" className='logo' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='nav-center'>
        <Nav className='m0a'>
          <NavItem>
            <NavLink href='#'
              onClick={() => {
                // eslint-disable-next-line react/prop-types
                args.onTypeSelected("Bayonet")
                setTimeout(scrollToMyRef, 0);
              }}
            >
              Штыковые
            </NavLink>
          </NavItem>
          <NavItem className='ml15'>
            <NavLink href='#'
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              args.onTypeSelected("For snow")
              setTimeout(scrollToMyRef, 0);
            }}>
              Для снега
            </NavLink>
          </NavItem>
          <NavItem className='ml15'>
            <NavLink href='#'
             onClick={() => {
              // eslint-disable-next-line react/prop-types
              args.onTypeSelected("Scoop");
              setTimeout(scrollToMyRef, 0);
            }}>
              Совковые
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className='ml15'>
              <DropdownToggle nav caret>
                {city}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => setCity("Москва") }>Москва</DropdownItem>
                <DropdownItem onClick={() => setCity("Санкт-Петербург") }>Санкт-Петербург</DropdownItem>
                <DropdownItem onClick={() => setCity("Сызрань") }>Сызрань</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Закрыть</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
           <Basket basketItem={basketItem}
           addItem={addItem}/> 
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;