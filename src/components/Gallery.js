import React from 'react';

const Gallery = ({ photos }) => {
	let images = photos.map(photos => <li key={photos.key}><img src={photos.url} alt=""  /></li> );
	return (
		<div className='gallery'>
			<ul>
				{images}
			</ul>
		</div>	
	);
};

export default Gallery;