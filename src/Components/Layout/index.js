import NavBar from "../Header/navbar";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
export default Layout;