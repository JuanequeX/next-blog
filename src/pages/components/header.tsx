import Link from "next/link"

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/posts'>Posts</Link></li>
      </ul>
    </nav>
  )
}

export default Header