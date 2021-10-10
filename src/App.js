import React, {Component} from "react";
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

class App extends Component {
  hotels = [
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
  ]
  state={
    hotels: [],
    loading: true,
    theme: 'primary'
  }
  handleSearch(inputValue){
    const hotels = [...this.hotels]
            .filter(hotel => hotel.name.toLowerCase().includes(inputValue.toLowerCase()))
    this.setState({
      hotels
    })
  }

  changeTheme = () => {
    const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
    this.setState({
      theme: newTheme
    })
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        hotels: this.hotels,
        loading: false,
        isAuthenticated: false,
      })
    },1000)
  }

  render(){
    const header =(
      <Header>
      <Searchbar onSearch={inputValue => this.handleSearch(inputValue)}/>
      <ThemeButton />
      </Header>
    );
    const menu = <Menu />;
    const content = (          
      this.state.loading ? 
      (<LoadingIcon />
      ) :(
      <Hotels 
      hotels={this.state.hotels}/>)
    );
    const footer = <Footer />
    return (
      <AuthContext.Provider value={{
        isAuthenticated: this.state.isAuthenticated,
        login: () => this.setState({isAuthenticated: true}),
        logout: () => this.setState({isAuthenticated: false}),
      }}>
        <ThemeContext.Provider value={{
          color: this.state.theme,
          changeTheme: this.changeTheme
          }}>
          <Layout 
            header={header}
            menu={menu}
            content={content}
            footer={footer}
          />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;

// import {useEffect, useState} from "react";
// import './App.css';
// import Header from './components/Header/Header';
// import Menu from './components/Menu/Menu';
// import Hotels from './components/Hotels/Hotels';
// import Searchbar from "./components/UI/Searchbar/Searchbar";
// import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
// import Layout from "./components/Layout/Layout";
// import Footer from "./components/Footer/Footer";

// const backendHotels = [
//   {
//     id: 1,
//     name: 'Pod akacjami',
//     city: 'Warszawa',
//     rating: 8.3,
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur repudiandae eius. Beatae error nulla nisi tempora rerum? Voluptatum autem impedit totam, sint ex quos porro quo blanditiis quis! Distinctio?',
//     image: ''
//   },
//   {
//     id: 2,
//     name: 'Dębowy',
//     city: 'Lublin',
//     rating: 7.2,
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur repudiandae eius. Beatae error nulla nisi tempora rerum? Voluptatum autem impedit totam, sint ex quos porro quo blanditiis quis! Distinctio?',
//     image: ''
//   },
// ];

// function App() {
//   const [hotels, setHotels] = useState([])
//   const [loading, setLoading] = useState(true);

//   const handleSearch = inputValue => {
//     const newHotels = [...backendHotels]
//             .filter(hotel => hotel.name.toLowerCase().includes(inputValue.toLowerCase()))
//     setHotels(newHotels);
//   }

//   useEffect(() =>{   
//             setTimeout(()=> {
//               setHotels(backendHotels);
//               setLoading(false)
//             },1000)
//           },[]);
 

//   return (
//     <Layout 
//       header={
//         <Header>
//           <Searchbar onSearch={inputValue => handleSearch(inputValue)}/>
//         </Header> }
//       menu={<Menu />}
//       content={          
//         loading ? 
//         (<LoadingIcon />
//         ) :(
//         <Hotels hotels={hotels}/>)}
//       footer={<Footer/>}
//     />
//   );
// };

// export default App;
