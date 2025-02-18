import { createResource } from "solid-js";
import { fetchAlbum } from "../api/album";
import { fetchLibraryAlbum } from "../api/library-album";
import { fetchArtist } from "../api/artist";
import { fetchBrowse } from "../api/browse";
import { fetchCurator } from "../api/curator";
import { fetchRecommendations } from "../api/home";
import { fetchMultiplex } from "../api/multiplex";
import { fetchMultiroom } from "../api/multiroom";
import { fetchPlaylist } from "../api/playlist";
import { fetchLibraryPlaylist } from "../api/library-playlist";
import { fetchRadio } from "../api/radio";
import { fetchStation } from "../api/station";
import {
  fetchSearchCategories,
  fetchSearchResults,
  fetchSearchSuggestions
} from "../api/search";

export const createAlbumStore = () => {
  return function (params: { id: string }) {
    const [data] = createResource(
      () => params.id,
      async () =>
        await (params.id.startsWith("l.") ? fetchLibraryAlbum : fetchAlbum)({
          devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
          musicUserToken: MusicKit.getInstance()?.musicUserToken,
          id: params.id
        })
    );

    return data;
  };
};

export const createSearchCategoriesStore = () => {
  return function () {
    const [data] = createResource<
      any,
      {
        devToken: string;
        musicUserToken: string;
      },
      string
    >(
      {
        devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
        musicUserToken: MusicKit.getInstance()?.musicUserToken
      },
      fetchSearchCategories
    );

    return data;
  };
};

export const createSearchSuggestionsStore = () => {
  return function (params: { term: string }) {
    const [data] = createResource(
      () => params.term,
      async () => {
        return await fetchSearchSuggestions({
          devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
          musicUserToken: MusicKit.getInstance()?.musicUserToken,
          term: params.term
        });
      }
    );

    return data;
  };
};

export const createSearchResultsStore = () => {
  return function (params: { term: string }) {
    const [data] = createResource(
      () => params.term,
      async () => {
        return await fetchSearchResults({
          devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
          musicUserToken: MusicKit.getInstance()?.musicUserToken,
          term: params.term
        });
      }
    );

    return data;
  };
};

export const createArtistStore = () => {
  return function (params: { id: string }) {
    const [data] = createResource(
      () => params.id,
      async () => {
        return await fetchArtist({
          devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
          musicUserToken: MusicKit.getInstance()?.musicUserToken,
          id: params.id
        });
      }
    );

    return data;
  };
};

export const createBrowseStore = () => {
  return function () {
    const [data] = createResource<
      any,
      {
        devToken: string;
        musicUserToken: string;
      },
      string
    >(
      {
        devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
        musicUserToken: MusicKit.getInstance()?.musicUserToken
      },
      fetchBrowse
    );

    return data;
  };
};

export const createCuratorStore = () => {
  return function (params: { id: string }) {
    const [data] = createResource(
      () => params.id,
      async () => {
        return await fetchCurator({
          devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
          musicUserToken: MusicKit.getInstance()?.musicUserToken,
          id: params.id
        });
      }
    );

    return data;
  };
};

export const createHomeStore = () => {
  return function () {
    const [data] = createResource<
      any,
      {
        devToken: string;
        musicUserToken: string;
      },
      string
    >(
      {
        devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
        musicUserToken: MusicKit.getInstance()?.musicUserToken
      },
      fetchRecommendations
    );

    return data;
  };
};

export const createMultiplexStore = () => {
  return function (params: { id: string }) {
    const [data] = createResource(
      () => params.id,
      async () => {
        return await fetchMultiplex({
          devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
          musicUserToken: MusicKit.getInstance()?.musicUserToken,
          id: params.id
        });
      }
    );

    return data;
  };
};

export const createMultiroomStore = () => {
  return function (params: { id: string }) {
    const [data] = createResource(
      () => params.id,
      async () => {
        return await fetchMultiroom({
          devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
          musicUserToken: MusicKit.getInstance()?.musicUserToken,
          id: params.id
        });
      }
    );

    return data;
  };
};

export const createPlaylistStore = () => {
  return function (params: { id: string }) {
    const [data] = createResource<
      any,
      {
        devToken: string;
        musicUserToken: string;
        id: string;
      },
      string
    >(
      {
        devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
        musicUserToken: MusicKit.getInstance()?.musicUserToken,
        id: params.id
      },
      params.id.substring(0, 2) === "pl" ? fetchPlaylist : fetchLibraryPlaylist
    );

    return data;
  };
};

export const createRadioStore = () => {
  return function () {
    const [data] = createResource<
      any,
      {
        devToken: string;
        musicUserToken: string;
      },
      string
    >(
      {
        devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
        musicUserToken: MusicKit.getInstance()?.musicUserToken
      },
      fetchRadio
    );

    return data;
  };
};

export const createStationStore = () => {
  return function (params: { id: string }) {
    const [data] = createResource<
      any,
      {
        devToken: string;
        musicUserToken: string;
        id: string;
      },
      string
    >(
      {
        devToken: import.meta.env.VITE_MUSICKIT_TOKEN,
        musicUserToken: MusicKit.getInstance()?.musicUserToken,
        id: params.id
      },
      fetchStation
    );

    return data;
  };
};
