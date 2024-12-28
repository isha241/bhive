import { useCallback } from 'react';
import { useSpacesStore } from '../store/spacesStore';

export const useSpaceSelection = () => {
  const { selectSpace, selectedSpace } = useSpacesStore();

  const handleSpaceSelect = useCallback((id: string) => {
    selectSpace(id);
  }, [selectSpace]);

  return {
    selectedSpace,
    handleSpaceSelect,
  };
};