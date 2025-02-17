import React from "react";
import Link from "next/link";
import { CHARACTER_DATA } from "@/constants";

type CharacterProps = {
  name: string;
};

const CharacterCard = ({ name }: CharacterProps) => {
  const character = CHARACTER_DATA[name];
  return (
    <Link
      href={`/characters/${name}`}
      className="bg-green-200 flex flex-col rounded-xl w-96 p-10 justify-between items-center gap-10 border-4 border-green-200 hover:border-green-800 hover:border-solid transition cursor-pointer"
    >
      <div>
        <p className="text-3xl">{character.name}</p>
        <p className="text-xl">{character.description}</p>
      </div>
      <img
        alt="a picture of selected character"
        src={character.imageUrl}
        height={200}
        width={200}
      ></img>
    </Link>
  );
};

export default CharacterCard;
