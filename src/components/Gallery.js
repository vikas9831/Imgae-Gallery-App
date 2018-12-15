import React from 'react';
import NoImagesFound from './NoImagesFound';

const Gallery = ({ photos, loading }) => (
	
	<div className='photo-container'>
		<ul>
			{	
				(photos.length === 0 && !loading)
					? <NoImagesFound />
					: photos.map(photos => <li key={photos.key}><img src={photos.url} alt=""  /></li>)
			}
		</ul>
	</div>	
);

export default Gallery;