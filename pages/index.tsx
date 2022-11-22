// Import's
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

// Asset's
import { FaPlay } from "react-icons/fa";
import deleguaIconWhite from "../assets/images/icone-delegua-branco.png";
import leonelImage from "../assets/images/leonel.jpg";

const Home = () => {
  return (  
    <main className="w-screen h-screen bg-[url('../assets/images/background.jpg')] bg-cover">
      <Header />

      <div className="w-screen h-[calc(100vh-80px)] pt-24 backdrop-brightness-50">
        <div className="flex flex-col justify-center items-center">
          <Image src={deleguaIconWhite} width={300} alt="" priority />
          <h1
            className="text-white text-[4rem] font-bold [font-family:'Hobby_Horse_NF'] mb-4
            mt-4 [text-shadow:0_0_10px_#00000092]"
          >
            Delégua
          </h1>

          <h1
            className="text-white text-center text-4xl md:text-5xl font-semibold
            [text-shadow:0_0_10px_#000000b5] mb-4"
          >
            Linguagem de programação universal 100% em português
          </h1>
          <p
            className="text-white text-center text-2xl m-auto
            [text-shadow:0_0_10px_#000000] md:w-2/4 mb-4"
          >
            Execute código em português em qualquer dispositivo que interprete
            JavaScript, como celulares, tablets e computadores.
          </p>

          <Link
            href={""}
            className="m-auto text-center text-white border-2 p-2 rounded-lg
            transition-all duration-700 hover:bg-[#4e99c5] hover:border-[#4e99c5]
            shadow-2xl flex justify-center items-center mb-14"
          >
            Experimente agora mesmo! <FaPlay className="ml-2" />
          </Link>
        </div>

        <div className="flex max-[990px]:flex-col max-[990px]:items-center justify-center w-screen">
          <div>
            <Image
              src={leonelImage}
              className="rounded-full max-[990px]:mb-5"
              width={350}
              priority
              alt=""
            />
          </div>
          <div className="text-white ml-5 max-[990px]:ml-0 flex flex-col justify-around max-[990px]:items-center">
            <h1 className="text-2xl font-bold max-[990px]:mb-2 max-[990px]:font-xl max-[520px]:text-base text-center">
              A comunidade lusófona ainda sobre com a barreira do inglês
            </h1>
            <p className="w-[500px] max-[990px]:mb-2 max-[990px]:text-center">
              Aprender programação ainda é intimidador para uma grande parcela
              da humanidade. Por volta de 5% dos falantes de português fala
              inglês em algum nível, e apenas 1% é fluente. Temos um grande
              problema de acesso, e Delégua é uma das soluções que propomos
            </p>

            <p className="font-semibold">
              - Leonel Sanches, criador de Delégua.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
