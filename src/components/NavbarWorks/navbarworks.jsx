import { useState } from "react";
import { Link } from 'react-router-dom'

const NavbarWorks = ( ) => {
return (
<div className='navbarworksItems'>
<Link to="/">Platon</Link>
<Link to="/about">About</Link>
<Link to="/works">Works</Link>
</div>
)};
export default NavbarWorks;