import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

import UnableToLoad from '../components/UnableToLoad/UnableToLoad.js';

import {DEV_SERVER_URI} from '../variables/connections.js';

const getFeaturePath = 'features/';

const defaultFeature = {
	title: 'untitled',
	description: 'n/a',
	project: {
	  title: 'n/a'
	},
	creator: {
	  username: "n/a"
	},
	category: 'n/a',
	tasks: 'n/a',
	type: 'n/a',
	upvotes: []
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

class FeatureDetailsPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			featureID: '',
			feature: defaultFeature,
			error: false
		}
	}

	componentDidMount() {
		this.getFeature();
	}

	handleRetry() {
		this.getFeature();
	}

	getFeature() {
		const fID = this.props.match.params.featureID;

		axios.get(DEV_SERVER_URI + getFeaturePath + fID)
			.then((res) => {
				this.setState({
					feature: res.data,
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
						<h3 style={textStyle}>{this.state.feature.title}</h3>
						<p style={textStyle}>Description: {this.state.feature.description}</p>
						<p style={textStyle}>Project: <Link style={textStyle} to={`/project/${this.state.feature.project._id}`}>{this.state.feature.project.title}</Link></p>
						<p style={textStyle}>Creator: <Link style={textStyle} to={`/user/${this.state.feature.creator.username}`}>{this.state.feature.creator.username}</Link></p>
						<p style={textStyle}>Tasks: {this.state.feature.tags}</p>
						<p style={textStyle}>Category: {this.state.feature.category}</p>
						<p style={textStyle}>Upvotes: {this.state.feature.upvotes.length.toString()}</p>
					</div>
				</div>
			);
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

export default FeatureDetailsPage;