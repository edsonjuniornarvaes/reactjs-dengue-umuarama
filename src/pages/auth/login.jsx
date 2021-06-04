import styles from "../../theme/styles/patterns/pages/auth/auth.module.css";
import Login from "../../modules/Patterns/Pages/Auth/Components/Login";
import dengueUmuaramaLogo from "../../dengue-umuarama-logo.png";

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.loginScreen}`}>
      <head>
        <title>Web Dengue | Login</title>
        <link rel="icon" href="/" />
      </head>
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
  );
}
