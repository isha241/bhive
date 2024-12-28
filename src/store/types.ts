export interface Space {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  type?: string;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null;
  rules: null;
  amenities?: any;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string;
  facilities: null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: any;
  manager_id: null;
}

export interface SpacesState {
  spaces: Space[];
  loading: boolean;
  error: string | null;
  selectedSpace: string | null;
  filteredSpaces: Space[];
  allSpaces: Space[];
  searchQuery: string;
}

export interface SpacesActions {
  setSpaces: (spaces: Space[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  selectSpace: (id: string) => void;
  filterSpaces: (query: string) => void;
  clearFilters: () => void;
}
