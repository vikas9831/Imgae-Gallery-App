// App.js
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import PageNotFound from './components/PageNotFound';
import apiKey from './config.js';
import './css/index.css';

class App extends Component {
  state = {
    navOptions: [], // Removed 'home' from the options
    recentPhotos: JSON.parse(localStorage.getItem('recentPhotos')) || [],
    searchedPhotos: JSON.parse(localStorage.getItem('searchedPhotos')) || [],
    loading: false
  };

  componentDidMount() {
    if (navigator.onLine) {
      this.getRecentPhotos();
    }
  }

  getRecentPhotos = () => {
    this.setState({ loading: true });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&extras=url_m&format=json&nojsoncallback=1`)
      .then(response => {
        const recentPhotos = response.data.photos.photo.map(photo => ({
          url: photo.url_m,
          key: photo.id
        }));
        localStorage.setItem('recentPhotos', JSON.stringify(recentPhotos));
        this.setState({
          recentPhotos,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  searchPhotos = (query) => {
    this.setState({ loading: true });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&extras=url_m&format=json&nojsoncallback=1`)
      .then(response => {
        const searchedPhotos = response.data.photos.photo.map(photo => ({
          url: photo.url_m,
          key: photo.id
        }));
        localStorage.setItem('searchedPhotos', JSON.stringify(searchedPhotos));
        this.setState({
          searchedPhotos,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    const loading = <p>Loading...</p>;

    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Header onSearch={this.searchPhotos} paths={this.state.navOptions} />
            <div className="content">
              <Switch>
                <Route exact path="/" render={() => (
                  this.state.loading ? loading : <Gallery photos={this.state.recentPhotos} loading={this.state.loading} />
                )} />
                <Route path="/search/:query" render={props => (
                  this.state.loading ? loading : <Gallery photos={this.state.searchedPhotos} loading={this.state.loading} />
                )} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
