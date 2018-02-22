import React from 'react';

const listContainer = {
	width: "100%",
	display: "flex",
	flexFlow: "column"
 };
 
 const itemStyle = {
	width: "100%",
	display: "flex",
	// alignItems: "center",
	justifyContent: "space-between"
 };
 
 const textStyle = {
	color: "black"
 };

class TweetsList extends React.Component {
	mapTweets() {
		return this.props.tweets.map((t, index) => {
		  return (
			 <div key={index} style={itemStyle}>
				<p style={textStyle}>{t.title}</p>
				<p style={textStyle}>{t.category}</p>
				<Link style={textStyle} to={{pathname: `/tweet/${t._id}`}}>more</Link>
			 </div>
		  );
		});
	 }
  
	 render() {
		return (
		  <div style={listContainer}>
			 {this.mapTweets()}
		  </div>
		);
	 }
}

export default TweetsList;