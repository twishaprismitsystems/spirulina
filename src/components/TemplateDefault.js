import React, { Component } from 'react';

export default class TemplateDefault extends Component {
  render() {
    return(
      <React.Fragment> 
        {
          this.props.data.acf.common_details.description !== null ?
          <div className="container-fluid  pt-100 pb-100 " >
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="" dangerouslySetInnerHTML={{__html:this.props.data.acf.common_details.description}} />
                </div>
              </div>
            </div>
          </div>
        : null
        }
        
        {
          this.props.data.acf.common_details.benefit_details !== false ?
          <div className="container-fluid   mb-100 " >
          <div className="container hb-container">
            {
              this.props.data.acf.common_details.benefit_details.map((item,index)=>
                <div key={index} className="hb-row row  mb-100" data-aos="fade-up">
                  <div className="col-md-5 hb-img-col" data-aos="fade-up">
                    <div className="view img-rounded img-hover">
                      <img src={item.image} width="535" height="400"  alt="" title="" className=" img-fixed" />
                    </div>
                  </div>
                  <div className="col-md-7 hb-content-col " data-aos="fade-up">
                    <h3 className=" sec-heading-title" >{item.title}</h3>
                    <p className="" dangerouslySetInnerHTML={{__html:item.description}}  />
                  </div>
                </div>
              )
            }
          </div>
        </div>
        :null
        }
        	
        {
          this.props.data.acf.common_details.accordian_data !== false ?
          <div className="container-fluid accordion-sec  pt-100 pb-100 " >
            <div className="container ">	
              <div className="accordion accordion-flush" id="accordionFlush">
                  {
                    this.props.data.acf.common_details.accordian_data.map((item,index)=>
                    <div key={index} className="accordion-item" data-aos="fade-up">
                      <h2 className="accordion-header" id={"flush-heading"+(index+1)}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+(index+1)} aria-expanded="false" aria-controls={"flush-collapse"+(index+1)}>
                        <span className="h5">{item.title}</span>
                        </button>
                      </h2>
                      <div id={"flush-collapse"+(index+1)} className="accordion-collapse collapse" aria-labelledby={"flush-heading"+(index+1)} data-bs-parent="#accordionFlush">
                        <div className="accordion-body">
                          <p dangerouslySetInnerHTML={{__html:item.content}} />
                        </div>
                      </div>
                    </div>
                    )
                  }
              </div>
            </div>
          </div>
          : null
        }
      </React.Fragment>
    )
  }
}