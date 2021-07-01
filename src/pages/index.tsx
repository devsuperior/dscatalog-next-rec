import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div
        className={`row d-flex flex-column-reverse align-items-center justify-content-center flex-lg-row card-base border-radius-20 ${styles.homeText}`}
      >
        <div
          className={`col-lg-6 d-flex flex-column align-items-center mt-4 mt-md-0 ${styles.homeText}`}
        >
          <h1 className={styles.textTitle}>
            Conheça o melhor catálogo de produtos
          </h1>
          <p className={styles.textSubtitle}>
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
