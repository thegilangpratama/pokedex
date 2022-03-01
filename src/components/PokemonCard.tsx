/* eslint-disable react/jsx-key */

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Type } from "types/Pokemon";
import { PokemonTypeColor } from "utils/colors";

interface PokemonCard {
  id: number;
  name: string;
  image: string;
  type: Type[];
}

const PokemonCard: React.FC<PokemonCard> = ({ id, name, image, type }) => {
  const router = useRouter();
  function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const backgroundColors = type.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColor).filter(
      ([key, _]) => key === type.name
    );

    return backgroundColor;
  });

  return (
    <div
      className="flex flex-col w-full h-80 rounded-2xl shadow-lg items-center justify-between transition-all ease-in-out duration-500 hover:-translate-y-2"
      onClick={() => router.push(`pokemon/${name}`)}
    >
      <div
        className="flex flex-col relative justify-center items-center  w-full h-2/3 rounded-t-2xl overflow-hidden"
        style={{
          background: `linear-gradient(0deg, #fafafa, ${backgroundColors[0].light})`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="500"
          height="500"
          version="1.2"
          viewBox="0 0 375 375"
          className={`stroke-0 fill-[#fff] opacity-25 absolute w-52`}
        >
          <g id="surface1">
            <path d="M 186.5625 0 C 89.625 0 9.390625 74.25 0.015625 168.75 L 133.683594 168.75 C 141.558594 147 162.1875 131.25 186.5625 131.25 C 210.9375 131.25 231.570312 147 239.441406 168.75 L 373.109375 168.75 C 363.734375 74.25 283.5 0 186.5625 0 Z M 186.5625 168.75 C 185.949219 168.75 185.335938 168.78125 184.726562 168.839844 C 184.113281 168.902344 183.507812 168.992188 182.90625 169.109375 C 182.300781 169.230469 181.707031 169.378906 181.121094 169.558594 C 180.53125 169.734375 179.953125 169.941406 179.386719 170.175781 C 178.820312 170.414062 178.265625 170.675781 177.722656 170.964844 C 177.183594 171.253906 176.65625 171.570312 176.144531 171.910156 C 175.636719 172.25 175.140625 172.617188 174.667969 173.007812 C 174.191406 173.394531 173.738281 173.808594 173.304688 174.242188 C 172.871094 174.675781 172.457031 175.128906 172.070312 175.605469 C 171.679688 176.078125 171.3125 176.574219 170.972656 177.082031 C 170.632812 177.59375 170.316406 178.121094 170.027344 178.660156 C 169.738281 179.203125 169.476562 179.757812 169.238281 180.324219 C 169.003906 180.890625 168.796875 181.46875 168.621094 182.058594 C 168.441406 182.644531 168.292969 183.238281 168.171875 183.84375 C 168.054688 184.445312 167.964844 185.050781 167.902344 185.664062 C 167.84375 186.273438 167.8125 186.886719 167.8125 187.5 C 167.8125 188.113281 167.84375 188.726562 167.902344 189.335938 C 167.964844 189.949219 168.054688 190.554688 168.171875 191.15625 C 168.292969 191.761719 168.441406 192.355469 168.621094 192.941406 C 168.796875 193.53125 169.003906 194.109375 169.238281 194.675781 C 169.476562 195.242188 169.738281 195.796875 170.027344 196.339844 C 170.316406 196.878906 170.632812 197.40625 170.972656 197.917969 C 171.3125 198.425781 171.679688 198.921875 172.070312 199.394531 C 172.457031 199.871094 172.871094 200.324219 173.304688 200.757812 C 173.738281 201.191406 174.191406 201.605469 174.667969 201.992188 C 175.140625 202.382812 175.636719 202.75 176.144531 203.089844 C 176.65625 203.429688 177.183594 203.746094 177.722656 204.035156 C 178.265625 204.324219 178.820312 204.585938 179.386719 204.824219 C 179.953125 205.058594 180.53125 205.265625 181.121094 205.441406 C 181.707031 205.621094 182.300781 205.769531 182.90625 205.890625 C 183.507812 206.007812 184.113281 206.097656 184.726562 206.160156 C 185.335938 206.21875 185.949219 206.25 186.5625 206.25 C 187.175781 206.25 187.789062 206.21875 188.398438 206.160156 C 189.011719 206.097656 189.617188 206.007812 190.21875 205.890625 C 190.824219 205.769531 191.417969 205.621094 192.003906 205.441406 C 192.59375 205.265625 193.171875 205.058594 193.738281 204.824219 C 194.304688 204.585938 194.859375 204.324219 195.402344 204.035156 C 195.941406 203.746094 196.46875 203.429688 196.980469 203.089844 C 197.488281 202.75 197.984375 202.382812 198.457031 201.992188 C 198.933594 201.605469 199.386719 201.191406 199.820312 200.757812 C 200.253906 200.324219 200.667969 199.871094 201.054688 199.394531 C 201.445312 198.921875 201.8125 198.425781 202.152344 197.917969 C 202.492188 197.40625 202.808594 196.878906 203.097656 196.339844 C 203.386719 195.796875 203.648438 195.242188 203.886719 194.675781 C 204.121094 194.109375 204.328125 193.53125 204.503906 192.941406 C 204.683594 192.355469 204.832031 191.761719 204.953125 191.15625 C 205.070312 190.554688 205.160156 189.949219 205.222656 189.335938 C 205.28125 188.726562 205.3125 188.113281 205.3125 187.5 C 205.3125 186.886719 205.28125 186.273438 205.222656 185.664062 C 205.160156 185.050781 205.070312 184.445312 204.953125 183.84375 C 204.832031 183.238281 204.683594 182.644531 204.503906 182.058594 C 204.328125 181.46875 204.121094 180.890625 203.886719 180.324219 C 203.648438 179.757812 203.386719 179.203125 203.097656 178.660156 C 202.808594 178.121094 202.492188 177.59375 202.152344 177.082031 C 201.8125 176.574219 201.445312 176.078125 201.054688 175.605469 C 200.667969 175.128906 200.253906 174.675781 199.820312 174.242188 C 199.386719 173.808594 198.933594 173.394531 198.457031 173.007812 C 197.984375 172.617188 197.488281 172.25 196.980469 171.910156 C 196.46875 171.570312 195.941406 171.253906 195.402344 170.964844 C 194.859375 170.675781 194.304688 170.414062 193.738281 170.175781 C 193.171875 169.941406 192.59375 169.734375 192.003906 169.558594 C 191.417969 169.378906 190.824219 169.230469 190.21875 169.109375 C 189.617188 168.992188 189.011719 168.902344 188.398438 168.839844 C 187.789062 168.78125 187.175781 168.75 186.5625 168.75 Z M 0.015625 206.25 C 9.390625 300.75 89.625 375 186.5625 375 C 283.5 375 363.734375 300.75 373.109375 206.25 L 239.441406 206.25 C 231.570312 228 210.9375 243.75 186.5625 243.75 C 162.1875 243.75 141.558594 228 133.683594 206.25 Z M 0.015625 206.25" />
          </g>
        </svg>
        <p
          className="text-5xl font-bold drop-shadow-xl top-2 absolute"
          style={{
            color: backgroundColors[0].medium,
          }}
        >
          {"#" + id.toString().padStart(3, "0")}
        </p>
        <Image
          alt="pokemon-sprite"
          src={image}
          height={130}
          width={130}
          className="drop-shadow"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-evenly w-full ">
        <p className="text-2xl font-bold text-secondary tracking-wide">
          {capitalizeFirstLetter(name)}
        </p>
        <div className="flex flex-row justify-center gap-4 items-center w-full">
          {type.map((t: Type, idx: number) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: Object.entries(PokemonTypeColor).filter(
                    ([key, _]) => key === t.type.name
                  )[0][1].medium,
                }}
                className="px-2 py-1 rounded-md"
              >
                <p className="font-semibold text-primary tracking-wide text-xs">
                  {t.type.name.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
