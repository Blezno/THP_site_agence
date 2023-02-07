import { useState } from "react";
import { Link } from 'react-router-dom'

const NavbarWorks = ( ) => {
return (
<div className='navbarworksItems'>
<Link to="/">Platon</Link>
<Link to="/about">Solane</Link>
<Link to="/works">Sedal</Link>
</div>
)};
export default NavbarWorks;