// Import's
import Header from "../components/Header";

// Asset's
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <Header />

      <div className={styles.mainArea}>
        <div className={styles.initialContent}>
          <h1 className={styles.headline}>
            Linguagem de programação universal 100% em português
          </h1>
          <p
            className="text-center text-white text-2xl w-1/4 m-auto
          [text-shadow:_0_0px_5px_#0000006c]"
          >
            Execute código em português em qualquer dispositivo que interprete
            JavaScript, como celulares, tablets e computadores.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
