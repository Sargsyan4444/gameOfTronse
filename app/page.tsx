"use client";

import { Card, ActorsProps } from "@/components/card";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [characters, setCharacters] = useState<ActorsProps[]>([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then(setCharacters)
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <main className="w-full bg-gray-100 py-10 px-5">
      <section className="w-[1220px] mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Game of Thrones Characters
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map((char) => (
            <Card key={char.id} {...char} />
          ))}
        </div>
      </section>
    </main>
  );
}
