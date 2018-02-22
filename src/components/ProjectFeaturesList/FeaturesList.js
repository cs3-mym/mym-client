import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { DEV_SERVER_URI } from '../../variables/connections.js';

const upvoteFeaturePath = 'features/upvote';
const createFeaturePath = 'features/create';

const listContainer = {
	width: "100%",
	display: "flex",
	flexFlow: "column"
 };
 
 const itemStyle = {
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between"
 };
 
 const textStyle = {
	color: "white"
 };

 const containerStyle = {
	width: "100%",
	display: "flex",
	flexFlow: "column",
	alignItems: "center"
 };

 const inputStyle = {
	background: "#18192F",
	border: "0px solid",
	outline: "none",
	color: "white"
 };

class FeaturesList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showInput: false,
			title: '',
			description: '',
			category: '',
			tasks: '',
			error: false,
			submitted: false,
			feature: ''
		}
	}

	mapFeatures() {
		// console.log(this.props.features);
		return this.props.features.map((f, index) => {
		  return (
			 <div key={index} style={itemStyle}>
				<p style={textStyle}>({f.upvotes.length.toString()}) <Link style={textStyle} to={{pathname: `/feature/${f._id}`}}>{f.title}</Link> {f.category}</p>				
				<button onClick={() => this.handleUpvoteButton(f)}>upvote</button>
			 </div>
		  );
		});
	}

	handleChange(event) {
		// event.preventDefault();
   	let obj = {};
   	obj[event.target.name] = event.target.value;
   	this.setState(obj);
	}

	handleUpvoteButton = (feature) => {
		const obj = {
			token: this.props.token,
			featureID: feature._id
		}

		axios.post(DEV_SERVER_URI + upvoteFeaturePath, obj)
		.then((res) => {
			console.log("Success: Upvoted Feature");
		})
		.catch((err) => {
			console.log(err.message);
		});
	}

	handleAddButton() {
		this.setState({
			showInput: !this.state.showInput
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.title && this.state.description && this.state.category && this.props.token && this.props.projectID) {
			const obj = {
				token: this.props.token,
				title: this.state.title,
				description: this.state.description,
				category: this.state.category,
				projectID: this.props.projectID,
				tasks: this.state.tasks
			}
	
			axios.post(DEV_SERVER_URI + createFeaturePath, obj)
				.then((res) => {
					console.log("Success: feature created");
					this.setState({
						submitted: true,
						error: false,
						feature: res.data
					})
				})
				.catch((err) => {
					console.log(err.message);
					this.setState({
						submitted: true,
						error: true
					})
				});
		}
	}

	handleRetry() {
		this.setState({
			submitted: false,
			error: false,
		});
	}

	conditionalInput() {
		if (this.state.showInput) {
			return (
				<form style={containerStyle}>
					<p style={textStyle}>Title </p>
					<input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} style={inputStyle}/>
					<p style={textStyle}>Description </p>
					<input type="text" name="description"  onChange={this.handleChange.bind(this)} value={this.state.description} style={inputStyle}/>
					<p style={textStyle}>Category </p>
					<input type="text" name="category" onChange={this.handleChange.bind(this)} value={this.state.category} style={inputStyle}/>
					<p style={textStyle}>Tasks</p>
					<input type="text" name="tasks" onChange={this.handleChange.bind(this)} value={this.state.tasks} style={inputStyle}/>
					<button onClick={this.handleSubmit.bind(this)}>Submit</button>
				</form>
			);
		} 
	}
  
	conditionalRender() {
		if (this.state.submitted) {
			if (this.state.error) {
				return <p style={textStyle}>Unable create feature <button onClick={this.handleRetry.bind(this)}>Retry</button></p>;
			} else {
				return <p style={textStyle}>Success feature created <Link to={`/feature/${this.state.feature._id}`}>more</Link> <button onClick={this.handleRetry.bind(this)}>Another</button></p>
			}
		} else {
			return this.conditionalInput();
		}
	}

	 render() {
		return (
			<div style={listContainer}>
				{this.mapFeatures()}
				<div>
					<button onClick={this.handleAddButton.bind(this)}>Add Feature</button>
					{this.conditionalRender()}				
				</div>
			</div>
		);
	 }
}

export default FeaturesList;