import { useState } from "react";
import { NavContainer } from "./navContainer";
import { Logo } from "./logo";
import { MenuToggle } from "./menuToggle";
import { MenuLinks } from "./menuLinks";

const NavBar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavContainer>
            <Logo />
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} />
        </NavContainer>
    )
}
export default NavBar;