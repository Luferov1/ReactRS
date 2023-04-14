import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlayerInfo, ScorersResponse } from '../interfaces';

const playersAPI = createApi({
  reducerPath: 'playersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (build) => ({
    fetchPlayers: build.query<ScorersResponse, number>({
      query: (limit = 100) => ({
        url: '/competitions/PL/scorers',
        params: {
          limit,
        },
      }),
    }),
    fetchPlayerById: build.query<PlayerInfo, number>({
      query: (id = 100) => ({
        url: `/players/${id}`,
      }),
    }),
  }),
});

export default playersAPI;
