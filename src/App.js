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
      navOptions: [
        'dogs', 
        'milky way', 
        'landscape'
      ],
      navOnePhotos : [],
      navTwoPhotos: [],
      navThreePhotos: [],
      searched: [],
      loading: false
  }

  componentDidMount() {
    this.getPhotos(this.state.navOptions[0], 'navOnePhotos');
    this.getPhotos(this.state.navOptions[1], 'navTwoPhotos');
    this.getPhotos(this.state.navOptions[2], 'navThreePhotos');
  }

  getPhotos = (query, location) => {
    //Init loading state
    this.setState({
      loading: true
    });
    //Calls api then populates given location param in state with response data
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&extras=url_m&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          [location] : (response.data.photos.photo).map(photo => {
                    return {
                      'url': photo.url_m,
                      'key': photo.id
                    };
                  }),
          loading: false
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {

    const loading = <p> Loading... </p>;
    const photos = [
      this.state.navOnePhotos,
      this.state.navTwoPhotos,
      this.state.navThreePhotos,
      this.state.searched
    ];

    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <Header paths={this.state.navOptions} search={this.getPhotos} />
              <Switch>
                <Route exact path="/" />} />
                { this.state.navOptions.map((opt, index) => 
                    <Route  path={`/${opt}`} 
                            key={index} 
                            render={ props => (
                              (this.state.loading)
                                ? loading
                                : <Gallery photos={photos[index]} />
                            )}
                    />        
                )}
                <Route  path="/search/:input" 
                        render={ props => (            
                          (this.state.loading)
                            ? loading
                            : <Gallery photos={photos[3]} />
                        )} 
                />
                <Route component={PageNotFound} />
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
