import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import apiKey from './config.js';
import './css/main.css';


class App extends Component {
  
  state = {
      photos : []
  }

  componentDidMount() {
    this.getPhotos();
  }  

  getPhotos = (query = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&extras=url_s&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: (response.data.photos.photo).map(photo => {
                    return {
                      'url': photo.url_s,
                      'key': photo.id
                    };
                  })
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Header search={this.getPhotos} />
        <Gallery photos={this.state.photos} />
      </div>
    );
  }
}

export default App;


/*
  Project set up correctly using create-react-app:
    -No warnings or errors in console about unused/missing assets.
    -Running npm start successfully launches the app.
  UI Components:
    -App is broken up into components, for example:
      -App
      -Nav
      -Gallery
      -Gallery-item
      -Etc.
  Matching the mockups:
    -Provided CSS is used and the important aspects of the app generally resemble the mockups.
  Routing:
    -React Router properly implemented.
    -Routes correctly match URLs.
    -Clicking a nav link navigates user to new route and loads new data.
    -App includes a 404-like error route that displays when a URL path does not match an existing route.
  Data fetching:
    -Uses Flickr API correctly: API Keys and proper Photo source URLs.
    -Data fetched from a "container" component that passes data down to presentation component via props.
    -App displays a loading indicator each time the app fetches new data on at least the search route.
  Displaying Data:
    -No console errors or warnings regarding unique "key" props.
    -Key props passed to images.
  Search field:
    -Submitting search data returns & displays results.
    -If no matches are found by the search, the app includes a message to tell the user there are no matches.
*/
