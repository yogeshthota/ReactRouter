import {NavLink} from 'react-router-dom';

const navLinkStyles = ({isActive}) => {
            return ({
                fontWeight: isActive ? 'bold': 'normal',
                textDecoration: isActive ? 'none': 'underline'
            })
}

function Navbar(props) {
    return (
    <nav className='primary-nav' >
        <NavLink style={navLinkStyles} to='/' end>Home</NavLink>
        <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
    </nav>
    );
}

export default Navbar;