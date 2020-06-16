import React from "react";


const API_KEY = "3d790876479461764d53a954986abf1d";
const iframe = '<iframe height="265" style="width: 100%;" scrolling="no" title="fx." src="https://www.rainviewer.com/map.html" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'; 

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

class Radar extends React.Component{
  
    
    render(){
        return(
            <div>
            <h1>Radar</h1>
      <Iframe iframe={iframe} />                     
            </div>
        )
    }
}

export default Radar;