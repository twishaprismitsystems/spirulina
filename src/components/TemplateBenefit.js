import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

export default class TemplateBenefit extends Component {
  
  componentDidMount(){
    if(this.props.isscroll === true){
      $('html, body').animate({
        'scrollTop' : $(".health-benefits-tab").position().top
      });
    }
  }

  setsuburl(url){
    let urlar = url.split("/");
    return "/"+urlar[urlar.length - 3]+'/'+urlar[urlar.length - 2];
  }

  render() {
    return(
      <React.Fragment>
        <div className="container-fluid  pt-100 pb-100" >
          <div className="container">
            <div className="sec-heading">
              <h3 className="text-center sec-heading-title" style={{"color": "#2d2d48"}} dangerouslySetInnerHTML={{ __html:this.props.data.acf.section1.title }}  />
              <p className="text-center w-75 " dangerouslySetInnerHTML={{__html:this.props.data.acf.section1.description}} />
            </div>
            <div className="row">
                {
                  this.props.data.acf.section1.steps !== false ?
                    this.props.data.acf.section1.steps.map((item,index)=>
                    <div key={index} className="col-md-4">
                      <div className={"feature-box h-100 text-center " + item.class[0] }>
                        <div className="feature-box-icon">
                          <img className="" src={item.image} width="64" height="64" alt="" />
                        </div>
                        <h3 className="feature-box-title">{item.title}</h3>
                        <p className="feature-box-desc" dangerouslySetInnerHTML={{__html:item.description}} /> 
                      </div>
                    </div> 
                    )
                  : null
                }
              </div>
          </div>
        </div>	
	
      <div className="container-fluid benefit-sec-1 pb-100 " >
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <p className="" data-aos="fade-up" dangerouslySetInnerHTML={{__html:this.props.data.acf.section1.content}}  />
            </div>
          </div>
        </div>
      </div>	
	
	
<div className="container-fluid  pb-100">
	<div className="container">
			<div className="  health-benefits-tab " data-aos="fade-up">
			  <div className="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {
            this.props.data.acf.section2.tabs !== false ?
            this.props.data.acf.section2.tabs.map((item,index)=>
              <button key={index} className={index === 0 ? 'nav-link  active' : 'nav-link ' } id={"v-pills-"+(index+1)+"-tab"} data-bs-toggle="pill" data-bs-target={"#v-pills-"+(index+1)} type="button" role="tab" aria-controls={"v-pills-"+(index+1)} aria-selected="true">{item.title}</button>  
            )
            : null
          }
        </div>
				
			  <div className="tab-content " id="v-pills-tabContent">
				{
        this.props.data.acf.section2.tabs !== null ?
          this.props.data.acf.section2.tabs.map((item,index)=>
          <div key={index} className={index === 1 ? 'tab-pane fade show active' : 'tab-pane fade show'} id={"v-pills-"+(index+1)} role="tabpanel" aria-labelledby={"v-pills-"+(index+1)+"-tab"}>
            <div className="row hb-tab-row">
              <div className="col-sm-5  hb-tab-img-col">
                <img src={item.image} width="368" height="420" alt="" title="" className="img-fixed" />
              </div>
              <div className="col-sm-7 hb-tab-content-col">
                <div className="h3 hb-tab-title" >{item.title}</div>
                <p className=" hb-tab-content  " dangerouslySetInnerHTML={{__html:item.description}} />
                <Link to={this.setsuburl(item.read_more_link)} target="_blank" className="more-btn ">Read More</Link>
              </div>
            </div>
          </div>
          )
        : null
        }

			  </div>
			</div>
			
	</div>
</div>
      </React.Fragment>
    )
  }
}
