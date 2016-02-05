import ReactDOM from 'react-dom';
import {getTrackLeft} from './trackHelper.jsx';

const EventHandlers = {
	swipeStart(e) {
		let posX, posY;
		posX = e.touches ? e.touches[0].pageX : e.clientX;
		posY = e.touches ? e.touches[0].pageY : e.clientY;

		this.setState(Object.assign(this.state.touchObject,{
			startX:posX,
			startY:posY,
			curX:posX,
			curY:posY
		}))
	},

	swipeMove(e) {
		if(!this.state.touchObject.dragging) {
			return;
		}
		if(!this.state.touchObject.animating) {
			return;
		}
		let swipeLeft,curLeft,positionOffset,
			touchObject = this.state.touchObject;

		curLeft = getTrackLeft({
			slideIndex:this.state.touchObject.slideIndex,
			
		})
	},

	swipeEnd(e) {
		if(!this.state.touchObject.dragging) {

		}
	},


};	

export default EventHandlers;