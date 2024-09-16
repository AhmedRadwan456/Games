import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the structure of a Games
interface Game {
  id: number;
  thumbnail: string;
  genre: string;
  platform: string;
  short_description: string;
  title: string;
  name: string;
}

// Define the structure of the state
interface GameState {
  Games: Game[];
  isLoading: boolean;
  isError: string | null;
}

// Create async thunk for fetching Games
export const getGames = createAsyncThunk<Game[], string>(
  "GamesSlice/getGames",
  async (name: string) => {
    let headers = {
      "x-rapidapi-key": "969e1b7393msh3638890db05acaep17ac07jsn9a9a007ea4bf",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    };
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      {
        params: { category: name },
        headers,
      }
    );
    return response.data.slice(0, 45);
  }
);

// Initial state
const initialState: GameState = { Games: [], isLoading: false, isError: null };

// Create slice
const homeSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGames.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getGames.fulfilled,
      (state, action: PayloadAction<Game[]>) => {
        state.isLoading = false;
        state.Games = action.payload;
      }
    );
    builder.addCase(getGames.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "An error occurred";
    });
  },
});

// Export the reducer
export const homeReducer = homeSlice.reducer;
