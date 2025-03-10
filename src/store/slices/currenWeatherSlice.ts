import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

type Response = {
  status: number
  message: string
}

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
  city: string
}

const initialState : CurrentWeather = {
  city: "Moscow",

  weather: {
    coord: {
      lon: 0,
      lat: 0
  },
    weather: [
      {
          main: '',
          description: '',
      }
  ],
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
    },
    clouds: {
      all:0
    },
    wind: {
      speed: 0,
      deg: 0,
      gust: 0,
  },
  },
  isLoading: false,
  response: {
    status: 0,
    message: ''
  }
}

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true
    },
    fetchCurrentWeatherSucces(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.weather = action.payload.data
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    }
  }
})


export const { setCity } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer

