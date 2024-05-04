import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { DataGrid } from "../DataGrid";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/DataGrid",
  component: DataGrid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows: GridRowsProp = [
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

const columns: GridColDef[] = [
  { field: "name", headerName: "Pokemon name", width: 100 },
  { field: "url", headerName: "Url", width: 200 },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Pokemon: Story = {
  args: {
    rows,
    columns,
  },
};
