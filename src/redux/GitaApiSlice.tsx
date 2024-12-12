import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Chapter, Verse} from '../types';

export const GitaApiSlice = createApi({
  reducerPath: 'gitaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bhagavad-gita3.p.rapidapi.com/v2/',
  }),
  endpoints: builder => ({
    getChapters: builder.query<Chapter[], void>({
      query: () => ({
        url: 'chapters/',
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '09adfa939amshb1d093abee5706ap1f23cdjsn68343559f5b8',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
        },
      }),
    }),
    getVerses: builder.query<Verse[], void>({
      query: (chapter: number) => ({
        url: `chapters/${chapter}/verses/`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '09adfa939amshb1d093abee5706ap1f23cdjsn68343559f5b8',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
        },
      }),
    }),
  }),
});

export const {useGetChaptersQuery, useGetVersesQuery} = GitaApiSlice;
