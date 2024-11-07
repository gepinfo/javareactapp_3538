import React, { useState ,useEffect} from 'react';
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        NavbarText
    } from 'reactstrap';
    import "./header.scss";
    import DropdownButton from 'react-bootstrap/DropdownButton';
    import Dropdown from 'react-bootstrap/Dropdown';
    import { Logout } from "../login/login.services";
    import { details, deleteUser, UpdateUserImg, uploadImgFile } from '../user/user.service';
    import { Web, Upload } from "../../shared/shared.service";
    import {useJwt} from "react-jwt"
    
    const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [check, setCheck] = useState<any | null>();
        const toggle = () => setIsOpen(!isOpen);
        const decodedToken: any = useJwt(sessionStorage.getItem("JwtToken") || "");

        useEffect(() => {
          setCheck(decodedToken.decodedToken?.role);
        }, [decodedToken]);
        
        const logout = () => {
          const temp = { id: sessionStorage.getItem("Id") };
          Logout(temp).then(

            (data: any) => {
              sessionStorage.clear();
              let userId = sessionStorage.getItem("Id") || null; // this.router.navigate(['']);
            },
            (error: any) => {
              console.error("error:", error);
            }
          );
          window.location.reload();
        };
        
        return (
    <nav id="izil" className="header1">
<div id="iaoh" className="container">
<div data-columns="1" data-gjs="navbar" id="iiul" className="row no-gutters">
<div data-column="1" id="ig7k" className="cell">
<img id="imr1u" src="https://cdn.grapedrop.com/u5f631954a3924f379de303e603ec8319/32ef00133f9c4ecaaae76210e1160a64_group_18990.png" />
<div id="i0ma2" className="burger">
<div id="template-i51ti" className="burger-line-dark">
</div>
<div id="template-i74m3" className="burger-line-dark">
</div>
<div id="template-irkhy" className="burger-line-dark">
</div>
</div>
</div>
<div data-column="1" id="i0bnl" className="cell">
<div data-gjs="navbar-items" id="template-itb7b" className="menu-container">
<nav data-gjs="navs" id="template-i8b9j" className="menu">
<div id="MainMenu" >
<div className="d-flex">
                                            {check? <NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/home" >
                                                            home</NavLink>
                                                        </NavItem>:<></>}{check ==="Admin"?<NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/admin" >
                                                            admin</NavLink>
                                                        </NavItem>:<></>}
{check?<NavItem>
                                                            <NavLink id="izdchj" className="menu-link nav-item" href="/sefscreen" >
                                                            sefscreen</NavLink>
                                                        </NavItem>:<></>}



{check?<NavItem>
                                                            <NavLink id="ipek5x" className="btn btn-primary" onClick={logout}  href="/logout" >
                                                            logout</NavLink>
                                                        </NavItem>:<></>}
{check?<></>:<NavItem>
                                                            <NavLink id="ipek5x" className="btn btn-primary"  href="/login" >
                                                            login</NavLink>
                                                        </NavItem>}
                                                        </div>

                                
                            </div>
</nav>
</div>
</div>
</div>
</div>
</nav>

        );
      };
      
      export default Header;
    