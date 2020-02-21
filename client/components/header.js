import {useState} from 'react';
import {APP_NAME} from '../config';
import {signout,isAuth} from '../actions/auth'
import Router from 'next/router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import Link from 'next/link';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
        <NavbarBrand className='font-weight-bold'>SeoBlog</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
           {!isAuth() && <React.Fragment>
            <NavItem>
              <Link href='/signup'>
              <NavLink >Signup</NavLink>
              </Link> 
            </NavItem>
            <NavItem>
              <Link href='/signin'>
              <NavLink >Signin</NavLink>
              </Link> 
            </NavItem>
            </React.Fragment>
            }
{isAuth() &&
            <NavItem>
              <Link href='/signin'>
              <NavLink onClick={()=>signout(()=>Router.push('/signin'))}>Signout</NavLink>
              </Link> 
            </NavItem>
}
                  </Nav>
      
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;