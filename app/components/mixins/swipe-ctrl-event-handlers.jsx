import EventHandlers from './event-handlers.jsx';
 
 const SwipeCtrlEventHandler ={
	handleTouchStart(e) {
		let point = e.touches ? e.touches[0] : e;
		this.setState({transitionDuration:0});

		this.startX = this.x;
		this.pointX = point.pageX;
		EventHandlers.swipeStart.bind(this)(e);
	},

	handleTouchMove(e) {
		let point = e.touches ? e.touches[0] : e,
		deltaX = point.pageX - this.pointX,
		newX;

		this.pointX = point.pageX;

		newX = this.x + deltaX;

		console.log(point)

		if(Math.abs(newX) > this.props.maxSwipe) {
			newX = this.x + deltaX / 3;
		}

		if(this.props.direction === 'LEFT' && newX > 0) return;
		if(this.props.direction === 'RIGHT' && newX < 0) return;

		this.setState({
			translateX : newX
		});
		this.x = newX;
	},


	handleTouchEnd(e) {
		this.onTouchCancel.bind(this)(e);
	},

	handleTouchCancel(e) {
		this.onTouchCancel.bind(this)(e);
	},

	onTouchCancel(e) {
		let point = e.touches ? e.touches[0] : e,
 		newX = Math.round(this.x);
 		this.setState({
 			transitionDuration : this.TRANSITION_DURATION
 		});
 		if(Math.abs(newX) > this.props.maxSwipe) {
 			this.setState({
 				translateX : this.props.maxSwipe * (newX > 0 ? 1 : -1)
 			})
 			this.x = this.props.maxSwipe * (newX > 0 ? 1 : -1)
 		}else {
 			this.setState({
 				translateX : 0
 			})
 			this.x = 0;
 		}
	}	
}

export default SwipeCtrlEventHandler;