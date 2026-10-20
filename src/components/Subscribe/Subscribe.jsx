import styles from "./Subscribe.module.css";

export function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.info}>
            <h2 className={styles.title}>Сладкая подписка</h2>

            <p className={styles.description}>
              Пишем о новинках и необычных вкусах.
              <br />
              Только самое вкусное, без лишних писем.
            </p>
          </div>

          <div className={styles.form}>
            <div className={styles.fields}>
              <input
                className={styles.input}
                type="email"
                placeholder="Твой email"
                aria-label="Твой email"
              />

              <button className={styles.button} type="button">
                Подписаться
              </button>
            </div>

            <p className={styles.agreement}>
              Нажимая «Подписаться», ты соглашаешься с политикой
              конфиденциальности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
