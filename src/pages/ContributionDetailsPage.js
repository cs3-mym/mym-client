import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

import {DEV_SERVER_URI} from '../variables/connections.js';

const getContributionPath = 'contributions/';
const confirmContributionPath = 'contributions/confirm';

const defaultContribution = {
	title: 'untitled',
	description: 'n/a',
	project: { title: 'n/a' },
	creator: { username: 'n/a' },
	to: { username: 'n/a'},
	toUsername: 'n/a',
	technology: 'n/a',
	type: 'n/a',
	category: 'n/a',
	confirmations: []
 }
 
 const cardStyle = {
	width: "46%",
	display: "flex",
	flexFlow: "column",
	alignItems: "center",
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
	fontSize: "1em",
	lineHeight: 1
 }

 const headerStyle = {
	 color: "white",
	 fontSize: "1.6em"
 }
 
 const pageStyle = {
	width: "100%",
	display: "flex",
	flexFlow: "column",
	alignItems: "center",
	minHeight: "100vh",
	background: "#212a49"
 }

 class ContributionDetailsPage extends React.Component {
	 constructor(props) {
		 super(props);

		 this.state = {
			 contributionID: '',
			 contribution: defaultContribution,
			 error: false,
		 }
	 }
	 
	 componentDidMount() {
		 this.getContribution();
	 }

	 getContribution() {
		 const cID = this.props.match.params.contributionID;

		 axios.get(DEV_SERVER_URI + getContributionPath + cID)
		 	.then((res) => {
				 this.setState({
					 contribution: res.data,
					 contributionID: cID,
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

	 handleConfirmButton() {
		 const obj = {
			 token: this.props.token,
			 contributionID: this.state.contributionID
		 }

		 axios.post(DEV_SERVER_URI + confirmContributionPath, obj)
		 	.then((res) => {
				 console.log("Success: Contribution confirmed");
			 })
			 .catch((err) => {
				 console.log(err.message);
			 });
	 }

	 handleRetryButton() {
		this.getContribution();
	 }

	 mapConfirmations() {
		 return this.state.contribution.confirmations.map((c, index) => {
			 return <Link key={index} to={`/user/${c.username}`} style={textStyle}>{c.username}</Link>;
		 });
	 }

	 conditionalRender() {
		 if (this.state.error) {
			<div style={cardStyle}>
				<h3 style={headerStyle}> Unable to load item</h3>
				<button onClick={this.handleRetryButton.bind(this)}>Retry</button>
			</div>
		 } else {
			 return (
				 <div style={cardStyle}>
				 	<h3 style={headerStyle}>Contribution</h3>
					 <p style={textStyle}>Title: {this.state.contribution.title}</p>
					 <button onClick={this.handleRetryButton.bind(this)}>Refresh</button>
					 <p>Creator: <Link style={textStyle} to={`/user/${this.state.contribution.creator.username}`}>{this.state.contribution.creator.username}</Link></p>
					 <p>Contribution to: <Link style={textStyle} to={`/user/${this.state.contribution.toUsername}`}>{this.state.contribution.toUsername}</Link> <button onClick={this.handleConfirmButton.bind(this)}>Confirm</button></p>
					 <p>{this.state.contribution.description}</p>
					 <h3 style={headerStyle}>Additional Information</h3>
					 <p style={textStyle}>Project:</p>
					 <p style={textStyle}>Tech:</p>
					 <p style={textStyle}>Category:</p>
					 <p style={textStyle}>Type:</p>
					<h3 style={headerStyle}>Confirmations</h3>
					{this.mapConfirmations()}
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
 
 export default ContributionDetailsPage;