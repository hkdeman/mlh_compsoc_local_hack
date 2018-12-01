import React from "react";
import Webcam from "react-webcam";
import $ from 'jquery';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}


export default class WebcamCapture extends React.Component {
    constructor(props) {
        super(props);
        this.changeMembership = this.props.changeMembership;
    }

    async capture() {
      await sleep(1000);
      const imageSrc = this.refs.webcam.getScreenshot();
      var file = dataURLtoFile(imageSrc)
      let formData = new FormData();
      formData.append("image", file);
        $.ajax({
               type: "POST",
               url: "http://localhost:8000/api/users/check",
               data: formData, // serializes the form's elements.
               success: (data) =>
               {
                   if(data["name"]==undefined) {
                       data["name"] = "Stranger";
                       this.changeMembership(false);
                   } else {
                       this.props.changeMemberName(data["name"]);
                       this.changeMembership(true);
                   }
                    MySwal.fire({
                        title: 'Welcome '+data["name"],
                        animation: false,
                        customClass: 'animated tada'
                    })
               },
               cache: false,
                processData: false,
                contentType: false,
            });
    }

    videoStarted() {
        this.capture();
    }
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div>
          <Webcam
            audio={false}
            height={100}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            screenshotQuality={1}
            videoConstraints={videoConstraints}
            ref='webcam'
            style={{
                position: "fixed",
                left: "-300px"
            }}
            onUserMedia={this.videoStarted.bind(this)}
          />
        </div>        
      );
    }
  }