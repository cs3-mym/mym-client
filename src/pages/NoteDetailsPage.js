import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

import UnableToLoad from '../components/UnableToLoad/UnableToLoad.js';

import {DEV_SERVER_URI} from '../variables/connections.js';

const getNotePath = 'notes/';

const defaultNote = {
	title: 'untitled',
	description: 'n/a',
	project: {
	  title: 'n/a'
	},
	creator: {
	  username: "n/a"
	},
	category: 'n/a',
	tags: 'n/a'
 }
 
 const cardStyle = {
	width: "46%",
	display: "flex",
	flexFlow: "column",
	background: "#313e6d",
	color: "white",
	marginBottom: "10px",
	// boxShadow: "3px 3px #48578e",
	boxShadow: "0px 0px 5px 2px #18192F",
	border: "2px solid #48578e",
	padding: "20px"
 }
 
 const textStyle = {
	color: "white",
 }
 
 const pageStyle = {
	width: "100%",
	display: "flex",
	flexFlow: "column",
	alignItems: "center",
	minHeight: "100vh",
	background: "#212a49"
 }

class NoteDetailsPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			noteID: '',
			note: defaultNote,
			error: false
		}
	}

	componentDidMount() {
		this.getNote();
	}

	getNote() {
		const nID = this.props.match.params.noteID;

		axios.get(DEV_SERVER_URI + getNotePath + nID)
			.then((res) => {
				this.setState({
					note: res.data,
					error: false
				});
			})
			.catch((err) => {
				console.log(err.message);
				this.setState({
					error: true
				});
			});
	}

	conditionalRender() {
		if (this.state.error) {
			return <UnableToLoad/>
		} else {
			return (
				<div style={pageStyle}>
					<div style={cardStyle}>
						<h3 style={textStyle}>{this.state.note.title}</h3>
						<p style={textStyle}>Description: {this.state.note.description}</p>
						<p style={textStyle}>Project: <Link style={textStyle} to={`/project/${this.state.note.project._id}`}>{this.state.note.project.title}</Link></p>
						<p style={textStyle}>Creator: <Link style={textStyle} to={`/user/${this.state.note.creator.username}`}>{this.state.note.creator.username}</Link></p>
						<p style={textStyle}>Tags: {this.state.note.tags}</p>
						<p style={textStyle}>Category: {this.state.note.category}</p>
					</div>
				</div>
			)
		}
	}

	render() {
		return (
			<div style={pageStyle}>
				{this.conditionalRender()}
			</div>
		);
	}
}

export default NoteDetailsPage;