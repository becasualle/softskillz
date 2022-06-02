import Link from "next/link";
import styles from "./navbar.module.scss";
import { Button, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
const Navheader = () => {
  return (
    // <nav className={styles.navbar}>
    //   <Container>
    //     <div className={styles.navContainer}>
    //       <Link href="/">
    //         <a className={styles.title}>Блог</a>
    //       </Link>

    //       <ul>
    //         <li>
    //           <Link href="/posts">
    //             <a className={styles.link}>Все посты</a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </Container>
    // </nav>
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand href="/">SoftSkillz</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/courses">
              <Nav.Link href="/courses">Курсы</Nav.Link>
            </Link>
            <Link href="/cbt-diary">
              <Nav.Link href="/cbt-diary">Дневник</Nav.Link>
            </Link>
            <Link href="/sign-in">
              <Nav.Link href="/sign-in">Логин</Nav.Link>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline-primary" className="w-fit-content">
                Регистрация
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navheader;
