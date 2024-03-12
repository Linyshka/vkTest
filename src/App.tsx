import { useState } from 'react'
import './App.css'
import Filters from './components/Filters/Filters'
import Groups from './components/Groups/Groups'
import { FiltersContext } from './constants/FiltersContext'

const App = () => {
  const [color, setColor] = useState("Все");
  const [privacyType, setPrivacyType] = useState("Все");
  const [friends, setFriends] = useState("Все");

  return (
    <FiltersContext.Provider value={{color, privacyType, friends, setColor, setPrivacyType, setFriends}}>
      <main>
        <Filters />
        <Groups />
      </main>
    </FiltersContext.Provider>
  )
}

export default App;
