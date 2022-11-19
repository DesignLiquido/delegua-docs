// Import's
import Header from "../components/Header";

const Home = () => {
  return (
    <main className="w-screen h-screen bg-[url('../assets/images/background.jpg')] bg-cover">
      <Header />

      <div className="w-screen h-[calc(100vh-80px)] pt-28 backdrop-brightness-50">
        <div className="">
          <h1
            className="text-white text-center text-4xl md:text-5xl font-semibold
            [text-shadow:0_0_10px_#000000b5] p-5"
          >
            Linguagem de programação universal 100% em português
          </h1>
          <p
            className="text-white text-center text-2xl m-auto p-5
            [text-shadow:0_0_10px_#000000] md:w-2/4"
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
