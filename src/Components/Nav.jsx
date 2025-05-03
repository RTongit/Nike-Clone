import  headerLogo  from "../assets/images/header-logo.svg";
import  hamburger  from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
const Nav = () => {
  return (
<header className='padding-x py-8 absolute w-full z-10 '>
  <nav className='flex justify-between items-center  max-container '>
    <a href="#"><img src={headerLogo} alt="Logo" width="130px" height="29"/></a>
    <ul className='flex justify-center gap-16 grow-1 max-lg:hidden'>
      {navLinks.map((temp) => (
        <li key={temp.label}><a href={temp.href} className="hover:underline">{temp.label}</a></li>
      ))}
    </ul>
    <div><img src= {hamburger} alt="hamburger-icon" width="25px" height="25px" className='lg:hidden'/></div>
  </nav>
</header>
  )
}

export default Nav
