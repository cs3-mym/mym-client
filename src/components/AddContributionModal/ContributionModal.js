import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import {DEV_SERVER_URI} from '../../variables/connections.js';

const createContributionPath = 'contributions/create';

const modalStyle = {
	width: "100%",
	height: "100%",
	background: "rgba(0,0,0,0.3)",
	display: "flex",
	flexFlow: "column",
	alignItems: "center",
	justifyContent: "center",
	zIndex: "100",
	position: "absolute",
	left: "0",
	top: '0'
 }
 
 const messageBoxStyle = {
	width: "300px",
	background: "darkgray",
	display: "flex",
	flexFlow: "column",
	padding: "10px"
 }

 const formStyle = {
	 display: "flex",
	 flexFlow: "column",
	 alignItems: "center"
 }

class ContributionModal extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			submitted: false,
			error: false,
			contribution: ''
		}
	}

	handleOnChange(event) {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		if (this.state.title && this.state.description && this.props.token && this.props.user) {
			const obj = {
				token: this.props.token,
				to: this.props.user,
				title: this.state.title,
				description: this.state.description
			}

			axios.post(DEV_SERVER_URI + createContributionPath, obj)
				.then((res) => {
					console.log("Success: Contribution created");
					this.setState({
						contribution: res.data,
						submitted: true,
						error: false
					});
				})
				.catch((err) => {
					console.log(err.message);
					this.setState({
						submitted: true,
						error: true
					});
				});
		}
	}

	handleRetryButton() {
		this.setState({
			error: false,
			submitted: false,
			contribution: ''
		});
	}

	conditionalRender() {
		if(this.state.submitted) {
			if(this.state.error && !this.state.contribution) {
				return (
					<div style={modalStyle}>
						<button onClick={() => this.props.actions.handleShowContributionModal()}>close</button>
						<div style={messageBoxStyle}>
							<h3>Erro</h3>
							<p>Unable to add contribution</p>
							<button onClick={this.handleRetryButton.bind(this)}>Retry</button>
						</div>
					</div>
				);
			} else {
				return (
					<div style={modalStyle}>
						<button onClick={() => this.props.actions.handleShowContributionModal()}>close</button>
						<div style={messageBoxStyle}>
							<h3>Success</h3>
							<p>Your contribution has been created</p>
							<Link to={`/contribution/${this.state.contribution._id}`}>details</Link>
							<button onClick={this.handleRetryButton.bind(this)}>Submit Another</button>
						</div>
					</div>
				);
			} 
		} else {
			return (
				<div style={modalStyle}>
					<button onClick={() => this.props.actions.handleShowContributionModal()}>close</button>
					<div style={messageBoxStyle}>
						<h3>Create Contribution</h3>
						<form style={formStyle}>
							<p>Title</p>
							<input onChange={this.handleOnChange.bind(this)} type="text" name="title" placeholder="title" value={this.state.title}/>
							<p>Description</p>
							<input onChange={this.handleOnChange.bind(this)} type="text" name="description" placeholder="description" value={this.state.description}/>
							<button onClick={this.handleSubmit.bind(this)}>Submit</button>
						</form>
					</div>
				</div>
			);
		}
	}

	render() {
		return (
			<div style={{width: "100%", height: "100%"}}>
				{this.conditionalRender()}
			</div>
		);
	}
}

export default ContributionModal;