import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Main</a>
      </Link>

      <ul>
        <li>
          <Link href="/posts">
            <a>All posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
