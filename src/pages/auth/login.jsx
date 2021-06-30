/* ANCHOR: 📚 Lib imports. */
import { Helmet, HelmetProvider } from "react-helmet-async";

/* ANCHOR: 📦 Component imports. */
import styles from "../../theme/styles/patterns/pages/auth/auth.module.css";
import Login from "../../modules/Patterns/Pages/Auth/Components/Login";

/* ANCHOR: 🎛️ Layout imports. */
import dengueUmuaramaLogo from "../../dengue-umuarama-logo.png";
import dengueUmuaramaIcon from "../../favicon.ico";

export default function Home() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <link
          rel="icon"
          type="image/png"
          href={dengueUmuaramaIcon}
          sizes="16x16"
        />
        <Helmet title="Web Dengue | Login" />
      </HelmetProvider>

      <div className={`${styles.container} ${styles.loginScreen}`}>
        <section className={styles.main}>
          <img
            alt="Dengue Umuarama Panel"
            title="Dengue Umuarama Panel"
            src={dengueUmuaramaLogo}
            width="70%"
          />
          <h5 className="mt-4">Faça seu login</h5>
          <p>Utilize suas credenciais para acessar</p>
          <div className={styles.grid}>
            <Login loginUrl="/login" />
          </div>
        </section>
      </div>
    </>
  );
}
