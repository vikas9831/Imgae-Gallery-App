import React, { Component } from 'react';
import NoImagesFound from './NoImagesFound';

class Gallery extends Component {

	render(){

		const photos = this.props.photos;
		let images;
		if(photos.length > 0){
			images = photos.map(photos => <li key={photos.key}><img src={photos.url} alt=""  /></li> );
		}else{
			images = <NoImagesFound />
		}
		return (
			<div className='photo-container'>
				<ul>
					{images}
				</ul>
			</div>	
		);
	}
};

export default Gallery;