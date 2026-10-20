import styles from "./CatalogCard.module.css";
import productImage from "../../../assets/product.png";

export function CatalogCard() {
  return (
    <article className={styles.card}>
      <img
        src={productImage}
        alt="Клубничный мармелад"
        className={styles.image}
      />

      <div className={styles.content}>
        <p className={styles.info}>Lotte Jellycious · 66 г</p>

        <h3 className={styles.title}>Клубничный мармелад</h3>

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
