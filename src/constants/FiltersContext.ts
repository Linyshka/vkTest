import { createContext } from 'react';
import { FiltersContextInterface } from './types';

export const FiltersContext = createContext<FiltersContextInterface>({
  color: "Все",
  privacyType: "Все",
  friends: "Все",
  setColor: () => {},
  setPrivacyType: () => {},
  setFriends: () => {}
});