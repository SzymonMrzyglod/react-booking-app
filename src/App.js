import React, {Component} from "react";
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import Searchbar from "./components/UI/Searchbar/Searchbar";
import LoadingIcon from "./components/UI/LoadingIcon/LoadingIcon";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";


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
  }
  handleSearch(inputValue){
    const hotels = [...this.hotels]
            .filter(hotel => hotel.name.toLowerCase().includes(inputValue.toLowerCase()))
    this.setState({
      hotels
    })
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        hotels: this.hotels,
        loading: false,
      })
    },1000)
  }

  render(){
    return (
      <Layout 
        header={
          <Header>
            <Searchbar onSearch={inputValue => this.handleSearch(inputValue)}/>
          </Header> }
        menu={<Menu />}
        content={          
          this.state.loading ? 
          (<LoadingIcon />
          ) :(
          <Hotels hotels={this.state.hotels}/>)}
        footer={<Footer/>}
      />
    );
  }
}

export default App;
