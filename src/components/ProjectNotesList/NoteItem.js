import React from 'react';

import {Link} from 'react-router-dom';

const itemStyle = {
	width: "100%",
	display: "flex",
	// alignItems: "center",
	flexFlow: "column",
	justifyContent: "space-between"
 };

 const textStyle = {
	color: "white",
	margin: "4px 6px 4px 0"
 };

 const linkStyle = {
	color: "white"
 };

 const buttonStyle3 = {
	background: "#212a49",
	borderRadius: "0",
	color: "white",
	border: "1px solid white"
 }

class NoteItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showMessage: false
		}
	}

	handleMoreButton() {
		this.setState({
			showMessage: !this.state.showMessage
		});
	}

	conditionalMessage() {
		const {note} = this.props;
		if (this.state.showMessage) {
			return <p style={textStyle}>{note.description}</p>;
		}
	}

	conditionalButtonName () {
		if (this.state.showMessage) {
			return 'hide';
		} else {
			return 'show';
		}
	}

	render() {
		const { note } = this.props;
		return (
			<div style={itemStyle}>
				<p style={{...textStyle, display: "flex", justifyContent: "space-between", alignItems: "center"}}><Link style={textStyle} to={{pathname: `/note/${note._id}`}}>{note.title}</Link><button style={buttonStyle3} onClick={this.handleMoreButton.bind(this)}>{this.conditionalButtonName()}</button></p>
				{this.conditionalMessage()}
			</div>
		);
	}
}

export default NoteItem;