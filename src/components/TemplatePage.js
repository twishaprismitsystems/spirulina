import React, { Component } from 'react';

export default class TemplatePage extends Component {
  render() {
    return(
      <div className="container-fluid  pt-100 pb-100" >
        <div className="container">
          <div className="sec-heading" >
            <h3 className="text-center sec-heading-title" style={{"color": "#2d2d48"}}>{this.props.data.title.rendered}</h3>
            <p className="text-center w-75 "  dangerouslySetInnerHTML={{__html:this.props.data.content.rendered}} />
          </div>
        </div>
      </div>	
    )
  }
}
