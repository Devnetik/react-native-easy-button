/**
 * Created by michaelmalura on 30/07/16.
 */

import React, {
	PropTypes,
	Component
} from 'react';
import {
	Text,
	TouchableHighlight
} from 'react-native';
import Style from './style';

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableHighlight style={[Style.button, this.props.buttonStyle]}
								onPress={this.props.onPress}
								underlayColor={'black'}>
				<Text style={[Style.text, this.props.textStyle]}>{this.props.caption}</Text>
			</TouchableHighlight>
		)
	}
}

Button.propTypes = {
	icon       : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
	onPress    : PropTypes.func.isRequired,
	caption    : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	buttonStyle: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
		PropTypes.object
	]),
	textStyle  : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
		PropTypes.object
	]),
};
Button.defaultProps = {
	color  : 'black',
	caption: 'Button'
};

export default Button;