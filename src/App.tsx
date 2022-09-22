import "./styles/main.css";
import logoImage from "./assets/nlw-esports-logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImage} alt="eSports logo" />

      <h1 className='text-6xl text-white font-black mt-20 '>Your <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> is here</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="game image" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>4 notifications</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image2.png" alt="game image" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>4 notifications</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image3.png" alt="game image" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>4 notifications</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image4.png" alt="game image" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>4 notifications</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image5.png" alt="game image" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>4 notifications</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image6.png" alt="game image" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Game Name</strong>
            <span className='text-zinc-300 text-sm block'>4 notifications</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Couldn&apos;t find your duo?</strong>
            <span className='text-zinc-400'>Publish an event to find new players</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Post event
          </button>
        </div>
      </div>

    </div>

  );
}

export default App;
