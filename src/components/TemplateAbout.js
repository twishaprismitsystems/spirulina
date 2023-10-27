import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SiteInfo from './SiteInfo';

export default class TemplateAbout extends Component {

  seturl(url){
    let urlar = url.split("/");
    if(urlar[urlar.length - 2] === 'control'){
        return '';
    }
    return "/"+urlar[urlar.length - 2];
  }

  render() {
    return(
      <React.Fragment>
      <div className="container-fluid  pt-100 pb-100" >
        <div className="container">
          <div className="sec-heading" >
            <h3 className="text-center sec-heading-title" style={{"color": "#2d2d48"}}>{this.props.data.acf.about_details.title}</h3>
            <p className="text-center w-75 " dangerouslySetInnerHTML={{__html:this.props.data.acf.about_details.description}} />
          </div>
          <Link to={this.seturl(this.props.data.acf.about_details.inquiry_link)} className="more-btn  btn-center">Enquire</Link>
        </div>
      </div>	
	
      <div className="container-fluid  about-content-sec ">
        <div className="container">
          <img src="assets/img/spirulina-selective-focus-drink.png" alt="" title="" className="img-responsive rounded	" width="1200" height="600" data-aos="fade-up" />
          <div  className="h2 text-center" style={{"marginTop": "5rem", "fontWeight": "400"}} data-aos="fade-up" > {this.props.data.acf.about_details.content_title} </div>
          <p dangerouslySetInnerHTML={{__html:this.props.data.acf.about_details.content_details}} />
        </div>
      </div>
      <SiteInfo contact={this.props.data.acf.contact_info} />
    </React.Fragment>
    )
  }
}
