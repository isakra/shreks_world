import CharacterCard from "@/components/CharacterCard";
import React from "react";

const Characters = () => {
  return (
    <div className="flex gap-5 p-10 justify-center">
      {/* Shrek */}
      <CharacterCard name="shrek" />

      {/* Fiona */}
      <CharacterCard name="fiona" />

      {/* Donkey */}
      <CharacterCard name="donkey" />
    </div>
  );
};

export default Characters;
