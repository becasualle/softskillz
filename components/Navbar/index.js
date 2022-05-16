import Link from "next/link";
import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/">
            <a className={styles.title}>Main</a>
          </Link>

          <ul>
            <li>
              <Link href="/posts">
                <a className={styles.link}>All posts</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
