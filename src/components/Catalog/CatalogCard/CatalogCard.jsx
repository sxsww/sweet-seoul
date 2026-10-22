import { Link } from "react-router";
import styles from "./CatalogCard.module.css";
import productImage from "../../../assets/product.png";
export function CatalogCard() {
  return (
    <article className={styles.card}>
      <Link to="/product" className={styles.imageLink}>
        <img
          src={productImage}
          alt="Клубничный мармелад"
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <p className={styles.info}>Lotte Jellycious · 66 г</p>
        <h3 className={styles.title}>
          <Link to="/product" className={styles.titleLink}>
            Клубничный мармелад
          </Link>
        </h3>
        <div className={styles.bottom}>
          <p className={styles.price}>249 ₽</p>
          <button className={styles.button} type="button">
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}
