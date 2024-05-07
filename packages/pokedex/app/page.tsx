"use client";
import styles from "./page.module.css";
import { useState } from 'react';
import { Pokemons } from './lib/features/pokemons/Pokemons';

const columns = [
  { field: "name", headerName: "Pokemon name", width: 100 },
  { field: "url", headerName: "Url", width: 200 },
];


export default function Home() {
  const [page, setPage] = useState(0); // Initial page is 0

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <main className={styles.main}>
      <h1>Pokémon List</h1>

      <Pokemons
        page={page}
        handlePageChange={handlePageChange}
      />
    </main>
  );
}
