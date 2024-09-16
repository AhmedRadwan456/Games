import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the structure of a game
interface GameDetails {
  id: number;
  thumbnail: string;
  genre: string;
  platform: string;
  short_description: string;
  title: string;
  description: string;
  status: string;
  category: string;
  game_url: string;
}

// Define the structure of the state
interface DetailsState {
  Details: GameDetails | null;
  isLoading: boolean;
  isError: string | null;
}

// Create async thunk for fetching meals
export const getDetails = createAsyncThunk<GameDetails, number>(
  "detailsSlice/getDetails",
  async (id: number) => {
    let headers = {
      "x-rapidapi-key": "969e1b7393msh3638890db05acaep17ac07jsn9a9a007ea4bf",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    };
    const response = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      {
        params: { id },
        headers,
      }
    );
    return response.data;
  }
);

// Initial state
const initialState: DetailsState = {
  Details: null,
  isLoading: false,
  isError: null,
};

// Create slice
const DetailsSlice = createSlice({
  name: "Details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getDetails.fulfilled,
      (state, action: PayloadAction<GameDetails>) => {
        state.isLoading = false;
        state.Details = action.payload;
      }
    );
    builder.addCase(getDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "An error occurred";
    });
  },
});

// Export the reducer
export const detailsReducer = DetailsSlice.reducer;
