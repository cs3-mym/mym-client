import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import NoteItem from './NoteItem.js';

import {DEV_SERVER_URI} from '../../variables/connections.js';

const createNotePath = 'notes/create';

const listContainer = {
	width: "100%",
	display: "flex",
	flexFlow: "column",
	// alignItems: "center"
 };
 
 const textStyle = {
	color: "white",
	lineHeight: 1,
	fontSize: "1em",
	margin: "4px 0"
 };

 const inputStyle = {
	background: "#18192F",
	border: "0px solid",
	outline: "none",
	color: "white",
	margin: "4px 0"
 };

 const containerStyle = {
	width: "100%",
	display: "flex",
	flexFlow: "column",
	alignItems: "center"
 };

 const buttonStyle3 = {
	background: "#212a49",
	borderRadius: "0",
	color: "white",
	border: "1px dotted white"
 }

class NotesList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			tags: '',
			showInput: false,
			error: false,
			submitted: false,
			note: ''
		}
	}

	handleChange(event) {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.title && this.state.description && this.state.tags) {
			const obj = {
				token: this.props.token,
				title: this.state.title,
				description: this.state.description,
				tags: this.state.tags,
				projectID: this.props.projectID
			}

			axios.post(DEV_SERVER_URI + createNotePath, obj)
			.then((res) => {
				console.log("Success: Note created")
				this.setState({
					submitted: true,
					error: false,
					note: res.data
				});
			})
			.catch((err)=>{
				console.log(err.message);
				this.setState({
					submitted: false,
					error: true
				})
			});
		}
	}
	
	handleRetry() {
		this.setState({
			submitted: false,
			error: false
		});
	}

	handleAddButton() {
		this.setState({
			showInput: !this.state.showInput
		});
	}

	mapNotes() {
		return this.props.notes.map((n, index) => {
		  return <NoteItem key={index} note={n}/>;
		});
	 }

	 conditionalInput() {
		 if(this.state.showInput) {
			 return (
				 <form style={containerStyle}>
					 <p style={textStyle}>Title </p>
					<input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} style={inputStyle}/>
					<p style={textStyle}>Description </p>
					<input type="text" name="description"  onChange={this.handleChange.bind(this)} value={this.state.description} style={inputStyle}/>
					<p style={textStyle}>Tags </p>
					<input type="text" name="tags" onChange={this.handleChange.bind(this)} value={this.state.tags} style={inputStyle}/>
					<button style={buttonStyle3} onClick={this.handleSubmit.bind(this)}>Submit</button>
				 </form>
			 )
		 }
	 }

	 conditionalRender() {
		if (this.state.submitted) {
			if (this.state.error) {
				return <p style={textStyle}>Unable create note <button onClick={this.handleRetry.bind(this)}>Retry</button></p>;
			} else {
				return <p style={textStyle}>Success note created <Link to={`/note/${this.state.note._id}`}>more</Link> <button onClick={this.handleRetry.bind(this)}>Another</button></p>
			}
		} else {
			return this.conditionalInput();
		}
	 }
  
	 render() {
		return (
		  <div style={listContainer}>
			 {this.mapNotes()}
			 <div>
					<button style={buttonStyle3} onClick={this.handleAddButton.bind(this)}>Add Note</button>
					{this.conditionalRender()}				
				</div>
		  </div>
		);
	 }
}

export default NotesList;