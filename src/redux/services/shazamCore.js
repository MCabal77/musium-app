import { buildSelectors } from '@reduxjs/toolkit/dist/query/core/buildSelectors';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '3643a8aad3msh172cc11344d6b97p1140cajsnde2bca8b55f7');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: '/charts/world'}),
  }),
});

export const {
  useGetTopChartsQuery, 
} = shazamCoreApi;