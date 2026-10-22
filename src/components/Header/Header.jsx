import { Link, NavLink } from "react-router";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link className={styles.logo} to="/">
            <img src={logo} alt="Сладкий Сеул" />
          </Link>
          <nav className={styles.nav}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Каталог
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
