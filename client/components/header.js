import {useState} from 'react';
import {APP_NAME} from '../config';
import {signout,isAuth} from '../actions/auth'
import Router from 'next/router'
import Search from './blog/search';
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
console.log(isAuth())
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

{isAuth() && isAuth().role === 0 && (
  <NavItem>
    <Link href="/user">
      <NavLink>Dashboard</NavLink>
    </Link>
  </NavItem>
)}

{isAuth() && isAuth().role === 1 && (
  <NavItem>
    <Link href="/admin">
      <NavLink>Admin-Dashboard</NavLink>
    </Link>
  </NavItem>
)}
  <NavItem>
    <Link href="/blogs">
      <NavLink>Blogs</NavLink>
    </Link>
  </NavItem>
{isAuth() &&(
            <NavItem>
              <Link href='/signin'>
              <NavLink onClick={()=>signout(()=>Router.push('/signin'))}>Signout</NavLink>
              </Link> 
            </NavItem>)
}
{/* 
{isAuth() && isAuth().role!==1(
  <NavItem>
    <Link href='/user'>
    <NavLink>{`${isAuth().name}`}</NavLink>
    </Link> 
  </NavItem>
)
}

{isAuth() && isAuth().role===1(
  <NavItem>
    <Link href='/admin'>
    <NavLink>{Admin `${isAuth().name}`}</NavLink>
    </Link> 
  </NavItem>
)
} */}
                  </Nav>
      
        </Collapse>
      </Navbar>
      <Search />
    </div>
  );
}

export default Header;