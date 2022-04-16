import { Link } from "@chakra-ui/react";
import { Link as ReachLink } from 'react-router-dom';

export const MenuItems = ({ children, to = '/' }) => {
    return (
        <Link as={ReachLink} to={to}>
            {children}
        </Link>
    )
}