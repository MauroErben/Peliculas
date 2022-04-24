import { useState } from "react";
import { NavContainer } from "./navContainer";
import { Logo } from "./logo";
import { MenuToggle } from "./menuToggle";
import { MenuLinks } from "./menuLinks";
import { useDispatch, useSelector } from 'react-redux';
import { getAccountInfo, accountData } from '../../../app/features/account/accountSlice';
import { useEffect } from 'react';
const NavBar = () => {
    
    const isAuth = sessionStorage.getItem('session_id');
    const dispatch = useDispatch();
    const account = useSelector(accountData);
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        isAuth && dispatch(getAccountInfo());
    }, [dispatch])

    return (
        <NavContainer>
            <Logo />
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <MenuLinks isOpen={isOpen} accountInfo={account} isAuth={isAuth} />
        </NavContainer>
    )
}
export default NavBar;