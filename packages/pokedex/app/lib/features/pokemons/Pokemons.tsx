import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchPokemon, selectPokemon } from './pokemonsSlice';
import { PokemonList } from "components";

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  // Add more columns as needed
];

export function Pokemons({ }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [limit,] = useState(20)
  const composedUrl = ["https://pokeapi.co/api/v2/pokemon", pageIndex > 0 && `?offset=${pageIndex * limit}&limit=${limit}`].filter(Boolean).join("")
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);

  useEffect(() => {
    dispatch(fetchPokemon(pageIndex)); // Fetch data for the current page
  }, [dispatch, pageIndex]); // Re-fetch data when the page changes

  return (

    <PokemonList
      rows={pokemon}
      columns={columns}
      pagination
      // pageSize={10}
      onPageChange={(newPage: number) => dispatch(fetchPokemon(newPage))}
    />

  );
}
