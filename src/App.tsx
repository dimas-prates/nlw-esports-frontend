import "./styles/main.css";
import logoImage from "./assets/nlw-esports-logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAdModal } from "./components/CreateAdModal";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games").
      then(response => response.json()).
      then(data => {
        setGames(data);
      });
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt="eSports logo" />

      <h1 className='text-6xl text-white font-black mt-20 '>Your <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> is here</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner key={game.id} title={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.ads}></GameBanner>
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />

      </Dialog.Root>
    </div>
  );
}

export default App;
