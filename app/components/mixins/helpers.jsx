import ReactDOM from 'react-dom';

export default class Helpers {
	initialize(props) {
		let slideWidth = this.getWidth(ReactDOM.findDOMNode(this));
	},
	getWidth(elem) {
		return elem.getBoundingClientRect().width || elem.offsetWidth;
	}
};