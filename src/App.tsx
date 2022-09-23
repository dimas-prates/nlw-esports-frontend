import "./styles/main.css";
import logoImage from "./assets/nlw-esports-logo.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">Create an Event</Dialog.Title>
            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor="game"> What game?</label>
                  <input type="text" placeholder="Select the game you wanna play" />
                </div>
                <div>
                  <label htmlFor="name">Your nickname</label>
                  <input id="name" placeholder="What people call you in games?" />
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsPlaying">For how many years do you play?</label>
                    <input id="yearsPlaying" type="number" placeholder="It can be ZERO" />
                  </div>
                  <div>
                    <label htmlFor="discord">What&rsquo;s your discord handle?</label>
                    <input id="discord" type="text" placeholder="User#0000" />
                  </div>

                </div>

                <div>
                  <div>
                    <label htmlFor="weekDays">When do you usually play?</label>

                  </div>
                  <div>
                    <label htmlFor="hourStart">What time do you play?</label>
                    <div>
                      <input id="hourStart" type="time" placeholder="De" />
                      <input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>

                <div>
                  <input type="checkbox" name="" id="" />
                  I usually use the voice channel
                </div>
                <footer>
                  <button>Cancel</button>
                  <button type="submit">
                    <GameController />
                    Find my duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
