import React, { Component } from 'react';

class ImageLinks extends Component {
  render() {
    return (
      <div style={{display: "inline-block", padding: "2%", height: "20vh"}}>
        <img className="image-links shadow-like" src={this.props.link} style={{width:"400px", margin: "-20px", marginTop: "5%"}}/>
      </div>
    );
  }
}

export default ImageLinks;
