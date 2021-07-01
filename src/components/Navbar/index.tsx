import Link from "next/link";
import NavbarLink from "../NavbarLink";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-md navbar-dark bg-primary ${styles.mainNav}`}
    >
      <div className="container-fluid">
        <Link href="/">
          <a className={styles.navLogoText}>
            <h4>DS Catalog</h4>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Menu mobile"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className={`navbar-nav offset-md-2 ${styles.mainMenu}`}>
            <li>
              <NavbarLink label="HOME" target="/" />
            </li>
            <li>
              <NavbarLink label="CATALOG" target="/catalog" />
            </li>
            <li>
              <NavbarLink label="ADMIN" target="/admin" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
