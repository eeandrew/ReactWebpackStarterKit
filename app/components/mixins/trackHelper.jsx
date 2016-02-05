import ReactDOM from 'react-dom';

export const getTrackLeft = function(spec){
	let slideOffset = 0;
	let targetLeft = ((spec.slideIndex * spec.slideWidth) * -1) + slideOffset;
	return targetLeft;
};