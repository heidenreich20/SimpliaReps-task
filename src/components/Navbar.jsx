import Logo from '../assets/logo-simplia-reps.svg'

const Navbar = () => {
  return (
    <nav className='home-container01'>
      <img src={Logo} alt='logo' />
      <ul className='nav-items-container'>
        <li>Home</li>
        <li>FAQ</li>
        <li>Blogs</li>
      </ul>
    </nav>
  )
}

export default Navbar
