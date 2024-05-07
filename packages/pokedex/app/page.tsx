"use client";
import styles from "./page.module.css";
// import { Button } from "components";
import { store } from "./lib/store";
import { Provider } from "react-redux";

const rows = [
  {
    id: "bulbasaur",
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    id: "ivysaur",
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    id: "venusaur",
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
  {
    id: "charmander",
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
  },
  {
    id: "charmeleon",
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
  },
  {
    id: "charizard",
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
  },
  {
    id: "squirtle",
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
  },
  {
    id: "wartortle",
    name: "wartortle",
    url: "https://pokeapi.co/api/v2/pokemon/8/",
  },
  {
    id: "blastoise",
    name: "blastoise",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
  },
  {
    id: "caterpie",
    name: "caterpie",
    url: "https://pokeapi.co/api/v2/pokemon/10/",
  },
  {
    id: "metapod",
    name: "metapod",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
  },
  {
    id: "butterfree",
    name: "butterfree",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
  },
  {
    id: "bulbasaur",
    name: "weedle",
    url: "https://pokeapi.co/api/v2/pokemon/13/",
  },
  {
    id: "kakuna",
    name: "kakuna",
    url: "https://pokeapi.co/api/v2/pokemon/14/",
  },
  {
    id: "beedrill",
    name: "beedrill",
    url: "https://pokeapi.co/api/v2/pokemon/15/",
  },
  {
    id: "pidgey",
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
  },
  {
    id: "pidgeotto",
    name: "pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon/17/",
  },
  {
    id: "pidgeot",
    name: "pidgeot",
    url: "https://pokeapi.co/api/v2/pokemon/18/",
  },
  {
    id: "rattata",
    name: "rattata",
    url: "https://pokeapi.co/api/v2/pokemon/19/",
  },
  {
    id: "raticate",
    name: "raticate",
    url: "https://pokeapi.co/api/v2/pokemon/20/",
  },
];

const columns = [
  { field: "name", headerName: "Pokemon name", width: 100 },
  { field: "url", headerName: "Url", width: 200 },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <DataGrid columns={columns} rows={rows} /> */}
      {/* <Button label="test" /> */}
    </main>
  );
}
