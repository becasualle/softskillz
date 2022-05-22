import Link from "next/link";
import styles from "./navbar.module.scss";
import { Container } from "react-bootstrap";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navContainer}>
          <Link href="/">
            <a className={styles.title}>Блог</a>
          </Link>

          <ul>
            <li>
              <Link href="/posts">
                <a className={styles.link}>Все посты</a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
