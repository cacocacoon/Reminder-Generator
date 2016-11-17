import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class HeaderBar extends Component {

	render() {
		return (
			<div>
				<AppBar
					title="Calculate"
					titleStyle={{display: 'flex', justifyContent: 'center'}}
					iconStyleLeft={{display: 'none'}}
					iconElementRight={<FlatButton label="操作" />}
					/>
			</div>
		);
	}
}

export default HeaderBar;
