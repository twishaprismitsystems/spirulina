import React, { Component } from 'react';

export default class TemplateProductInfo extends Component {
  render() {
    return(
        <React.Fragment>
        <div className="container-fluid   pt-100 pb-100 " >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="" dangerouslySetInnerHTML={{__html:this.props.data.acf.product_details.content1}} />
                        <figure className="w-100 mt-5 mb-5" data-aos="fade-up">
                            <img src={this.props.data.acf.product_details.image} width="1200" height="630" alt="" title="" className="img-responsive rounded" />
                        </figure>
                        <p data-aos="fade-up" dangerouslySetInnerHTML={{__html:this.props.data.acf.product_details.content2}} />
                        <aside className="mt-5" dangerouslySetInnerHTML={{__html:this.props.data.acf.product_details.aside_list}} />
                    </div>
                </div>
            </div>
        </div>	

        <div className="container-fluid   mb-100 " >
            <div className="container hb-container">
                {
                    this.props.data.acf.product_details.benefits_list !== false ?
                        this.props.data.acf.product_details.benefits_list.map((item,index)=>
                        <div key={index} className="hb-row row  mb-100" data-aos="fade-up">
                            <div className="col-md-5 hb-img-col">
                                <div className="view img-rounded img-hover">
                                    <img src={item.image} width="535" height="400"  alt="" title="" className=" img-fixed" />
                                </div>
                            </div>
                            <div className="col-md-7 hb-content-col " >
                                <p className="" dangerouslySetInnerHTML={{__html:item.description}} />
                            </div>
                        </div>   
                        )
                    : null
                }
            </div>
        </div>
            
        <div className="container-fluid   pb-100 " >
            <div className="container">
                <section>
                    <div className="sec-heading" data-aos="fade-up">
                        <h3 className="text-center sec-heading-title" style={{"color": "#2d2d48"}} dangerouslySetInnerHTML={{__html:this.props.data.acf.product_details.ingredient_title}} />
                    </div>
                    <div className="row" dangerouslySetInnerHTML={{__html:this.props.data.acf.product_details.ingredient_data}} />
                </section>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
