import styles from "./Hero.module.css";
import heroImage from "../../assets/hero.png";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.info}>
            <p className={styles.label}>КОРЕЙСКИЕ СЛАДОСТИ И СНЕКИ</p>

            <h1 className={styles.title}>
              Сеул ближе,
              <br />
              чем кажется
            </h1>

            <p className={styles.description}>
              Любимые сладости и новые вкусы из Кореи. Для себя, друзей и
              хорошего настроения.
            </p>

            <a href="#" className={styles.button}>
              Перейти в каталог
              <span aria-hidden="true">↗</span>
            </a>

            <p className={styles.caption}>Открывай. Пробуй. Влюбляйся.</p>
          </div>

          <div className={styles.showcase}>
            <div className={styles.showcaseHeader}>
              <span>МАЛЕНЬКАЯ РАДОСТЬ</span>
              <span className={styles.star}>✳</span>
            </div>

            <div className={styles.imageWrapper}>
              <img
                src={heroImage}
                alt="Корейские сладости"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
