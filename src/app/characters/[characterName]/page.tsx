import { CHARACTER_DATA } from "@/constants";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ characterName: string }>;
};

const CharacterInfo = async (props: Props) => {
  const { characterName } = await props.params;
  const character = CHARACTER_DATA[characterName];

  if (!character) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p>{character.name}</p>
      <p>{character.description}</p>
      <Image
        src={`/${character.imageUrl}`}
        width={200}
        height={200}
        alt="picture of a char"
      />
    </div>
  );
};

export default CharacterInfo;
