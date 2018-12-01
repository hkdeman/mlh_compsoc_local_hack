import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="shadow-like" style={{width: "40%", height:"50vh", backgroundColor: "#F08080", borderRadius:"12px", marginLeft: "30%", padding: "2%"}}>
        <h3 style={{textAlign:"center"}}> Next Event</h3>
        <br/>
        <h4 style={{textAlign:"center"}}> March 11th, 2019</h4>
        <a href={this.props.href}>
          <img src="https://2018.hacktheburgh.com/static/img/logo-htb-print.png" style={{width:"50%", padding:"2%", display: "block", marginLeft: "auto", marginRight:"auto"}}/>
        </a>
      </div>
    );
  }
}

export default Banner;
