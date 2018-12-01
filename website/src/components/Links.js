import React, { Component } from 'react';

class Links extends Component {
  render() {
    return (
      <div className="small-banners shadow-like" style={{display: "inline-block", width: "12%", height:"25vh", backgroundColor: this.props.color, borderRadius:"12px", marginLeft: "2%", padding: "2%", marginTop: "5%"}}>
        <img src={this.props.link} style={{width:"150px", margin: "-20px", marginTop: "15%"}}/>
      </div>
    );
  }
}

export default Links;
