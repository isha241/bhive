import { create } from "zustand";
import { SpacesState, SpacesActions } from "./types";
import { spaces as initialSpaces } from "../data/spaces";

export const useSpacesStore = create<SpacesState & SpacesActions>(
  (set, get) => ({
    spaces: initialSpaces,
    loading: false,
    error: null,
    selectedSpace: null,
    filteredSpaces: initialSpaces,
    searchQuery: "",
    setSpaces: (spaces) => set({ spaces, filteredSpaces: spaces }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    selectSpace: (id) => set({ selectedSpace: id }),

    // filterSpaces: (query) => {
    //   const { spaces } = get();
    //   const filtered = spaces.filter((space) =>
    //     space.name.toLowerCase().includes(query.toLowerCase())
    //   );
    //   set({ filteredSpaces: filtered, searchQuery: query });
    // },

    // clearFilters: () => {
    //   const { spaces } = get();
    //   set({ filteredSpaces: spaces, searchQuery: "" });
    // },
    allSpaces: initialSpaces, // Assuming you have an array of spaces (e.g., fetched from an API)

    // Update filtered spaces based on search query
    filterSpaces: (query: string) =>
      set((state) => {
        const filtered = state.allSpaces.filter((space) =>
          space.name.toLowerCase().includes(query.toLowerCase())
        );
        return {
          searchQuery: query,
          filteredSpaces: filtered, // Update filtered spaces
        };
      }),

    // Clear search query and reset filtered spaces
    clearFilters: () =>
      set(() => ({
        searchQuery: "",
        filteredSpaces: [], // Optionally reset filtered spaces or restore all spaces
      })),
  })
);
