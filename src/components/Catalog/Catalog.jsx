import { Link } from "react-router";
import styles from "./Catalog.module.css";
import { CatalogCard } from "./CatalogCard/CatalogCard";

export function Catalog() {
  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Хиты из Кореи</h2>

          <Link to="/catalog" className={styles.link}>
              Все вкусняшки <span aria-hidden="true">↗</span>
            </Link>
        </div>

        <div className={styles.cards}>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
      </div>
    </section>
  );
}
