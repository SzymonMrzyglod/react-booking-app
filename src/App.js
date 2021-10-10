import React, {Component, useEffect, useState} from "react";
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import Searchbar from "./components/UI/Searchbar/Searchbar";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/UI/ThemeButton/ThemeButton";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";

const beckendHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: 8.3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur repudiandae eius. Beatae error nulla nisi tempora rerum? Voluptatum autem impedit totam, sint ex quos porro quo blanditiis quis! Distinctio?',
    image: ''
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: 7.2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur repudiandae eius. Beatae error nulla nisi tempora rerum? Voluptatum autem impedit totam, sint ex quos porro quo blanditiis quis! Distinctio?',
    image: ''
  },
];



function App() {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('primary');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeTheme = () => {
    const newTheme = theme === 'primary' ? 'danger' : 'primary';
      setTheme(newTheme)
  };

  const handleSearch = inputValue => {
    const newHotels = [...beckendHotels]
            .filter(hotel => hotel.name.toLowerCase().includes(inputValue.toLowerCase()))
    setHotels(newHotels)
  }

  useEffect(() => {
    setTimeout(()=> {
      setHotels(beckendHotels);
      setLoading(false);
    },1000)
  }, []);

  const header =(
    <Header>
    <Searchbar onSearch={inputValue => handleSearch(inputValue)}/>
    <ThemeButton />
    </Header>
  );
  const menu = <Menu />;
  const content = (          
    loading ? 
    (<LoadingIcon />
    ) :(
    <Hotels 
    hotels={hotels}/>)
  );
  const footer = <Footer />

  return(
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      login: () => setIsAuthenticated(true),
      logout: () => setIsAuthenticated(false),
    }}>
      <ThemeContext.Provider value={{
        color: theme,
        changeTheme: changeTheme
        }}>
        <Layout 
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
};

export default App;
