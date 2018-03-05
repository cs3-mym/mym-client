import React from 'react';

const listContainer = {
	width: "100%",
	display: "flex",
	flexFlow: "column"
 };
 
 const itemStyle1 = {
	width: "100%",
	display: "flex",
	// alignItems: "center",
	justifyContent: "space-between",
	magin: "5px 0",
	background: "lightgray"
 };

 const itemStyle2 = {
	width: "100%",
	display: "flex",
	// alignItems: "center",
	justifyContent: "space-between",
	magin: "5px 0",
	background: "darkgray"
 };
 
 const textStyle = {
	color: "black"
 };

class TweetsList extends React.Component {
	mapTweets() {

		return this.props.tweets.map((t, index) => {

			let st;
			if (index%2 === 0) {
				st = itemStyle1;
			} else {
				st = itemStyle2;
			}
			
		  return (
			 <div key={index} style={st}>
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