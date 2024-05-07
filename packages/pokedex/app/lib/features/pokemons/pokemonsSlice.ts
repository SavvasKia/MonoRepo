import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async (page: number) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 10}&limit=10`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    status: 'idle',
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectPokemon = (state) => state.pokemon.data;

export default pokemonSlice.reducer;
