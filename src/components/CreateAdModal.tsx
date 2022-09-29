import { Check, GameController } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./Form/Input";
import * as Checkbox from "@radix-ui/react-checkbox";

export function CreateAdModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black">Create an Event</Dialog.Title>
        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold"> What game?</label>
            <select id="game"

              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            >
              <option disabled selected value="">Select the game you wanna play</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Your nickname</label>
            <Input id="name" placeholder="What people call you in games?" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">How many years do you play?</label>
              <Input id="yearsPlaying" type="number" placeholder="It can be ZERO" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">What&rsquo;s your discord handle?</label>
              <Input id="discord" type="text" placeholder="User#0000" />
            </div>

          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">When do you usually play?</label>
              <div className="grid grid-cols-4 gap-2">
                <button title="Sunday" className="w-8 h-8 rounded bg-zinc-900">S</button>
                <button title="Monday" className="w-8 h-8 rounded bg-zinc-900">M</button>
                <button title="Tuesday" className="w-8 h-8 rounded bg-zinc-900">T</button>
                <button title="Wednesday" className="w-8 h-8 rounded bg-zinc-900">W</button>
                <button title="Thursday" className="w-8 h-8 rounded bg-zinc-900">T</button>
                <button title="Friday" className="w-8 h-8 rounded bg-zinc-900">F</button>
                <button title="Saturday" className="w-8 h-8 rounded bg-zinc-900">S</button>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">What time do you play?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="De" />
                <Input id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm">
            <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            I usually use the voice channel
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
              Cancel
            </Dialog.Close>
            <button type="submit" className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600">
              <GameController className="w-6 h-6" />
              Find my duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}