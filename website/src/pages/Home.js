import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebcamCapture from './components/WebcamCapture';
import Banner from './components/Banner';
import Links from './components/Links';
import ImageLinks from './components/ImageLinks';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: false,
      member: true,
      name: ""
    };
    this.seen = false;
    this.changeMembership = (status) => {
        this.setState({
          setup: true,
          member: status,
        });
      };

    this.changeMemberName = (name) => {
      this.setState({
        name: name
      });
    }

    $("body").scroll(() => {
        if(!this.seen) {
          if($(".small-banners").is(":visible")){
            $(".small-banners").addClass("animated bounceInUp");
          }
          if($(".image-links").is(":visible")) {
            $(".image-links").addClass("animated bounceInUp");
          }
          this.seen = true;
        }
      });
  }

  render() {
    return (
      <div>
        <div class="col-lg-12">
          <h2 class="main-title"> Home of scotland's best and largest tech society</h2>
          <Banner />
          <h2 style={{marginTop:"4%", textAlign:"center", fontSize:"2.7em"}}>Comp Soc: Home of SIGS</h2>
          <div style={{marginLeft:"13%"}}>
            <Links color="#F08080" link="https://comp-soc.com/static/img/sigs/sigint.png"/>
            <Links color="#45B39D" link="https://comp-soc.com/static/img/sigs/hacksig.png" />
            <Links color="#2980B9" link="https://comp-soc.com/static/img/sigs/sigcoin.png"/>
            <Links color="#032c3B" link="https://scontent-lht6-1.xx.fbcdn.net/v/t1.15752-0/p280x280/47226932_274502723408992_5608729248463323136_n.png?_nc_cat=100&_nc_ht=scontent-lht6-1.xx&oh=3235d92c92eb95ef42c80b5ac863d38e&oe=5C688547"/>
            <Links color="#1f7a8c" link="https://scontent-lht6-1.xx.fbcdn.net/v/t1.15752-0/p280x280/47388997_269894647006946_6342566518844293120_n.png?_nc_cat=106&_nc_ht=scontent-lht6-1.xx&oh=7e9f7728d7ff44d2db6faf23d62ba083&oe=5C6B3AE0"/>
            <Links color="#9ee4be" link="https://scontent-lht6-1.xx.fbcdn.net/v/t1.15752-0/p280x280/47172437_512864912552576_7712101065482567680_n.png?_nc_cat=111&_nc_ht=scontent-lht6-1.xx&oh=82929c75bec7d80565a2630ce3497bcd&oe=5CAA0FF5"/>
          </div>
        </div>
        <div class="col-lg-12">
          <h2 style={{marginTop:"5%", textAlign:"center", fontSize:"2.5em"}}>Partner</h2>
          <div class="col-lg-12" style={{marginLeft: "10%"}}>
            <ImageLinks link="https://thumbor.forbes.com/thumbor/416x416/filters%3Aformat%28jpg%29/https://i.forbesimg.com/media/lists/companies/jpmorgan-chase_416x416.jpg"/>
            <ImageLinks link="https://media.licdn.com/dms/image/C4D0BAQHovZtPQDiUeA/company-logo_200_200/0?e=2159024400&v=beta&t=Erl5slAno7XWll--QVHDW-B4cx_kkG3hX2gXedx-acg"/>
            <ImageLinks link="data:image/png;base64,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"/>
            <ImageLinks link="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
            <ImageLinks link="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"/>
            <ImageLinks link="https://targetjobs.co.uk/sites/targetjobs.co.uk/files/public/field_ad_org_logo/metaswitch.png"/>
            <ImageLinks link="http://www.bar-50.co.uk/images/ico-logo.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
