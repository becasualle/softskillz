import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="title">Main</a>
        </Link>

        <ul>
          <li>
            <Link href="/posts">
              <a>All posts</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
