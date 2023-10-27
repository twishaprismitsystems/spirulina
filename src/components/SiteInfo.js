import React, { Component } from 'react';

export default class SiteInfo extends Component {
  render() {
    return (
        <div className="container-fluid contact-sec  pt-100 pb-100 ">
            <div className="sec-heading" data-aos="fade-up">
                <h3 className="text-center sec-heading-title" >{this.props.contact.title}</h3>
                <p className="text-center " dangerouslySetInnerHTML={{__html:this.props.contact.description}} />
            </div>
            <div className="container">
                <div className="row justify-content-center" >
                    <div className="col-xl-9 col-lg-10 col-md-12  row" data-aos="fade-up">
                        {
                        this.props.contact.list !== false ?
                            this.props.contact.list.map((item,index)=>
                            <div key={index} className=" col-md-4 col-sm-4 col-12 contact-detail">
                                <p>
                                    <span className="foo-icon"><i className={item.icon}></i></span>
                                    {
                                        item.type === "address" ?
                                        <a target="_blank" rel="noreferrer" href={"https://www.google.com/maps/search/?api=1&query="+item.info}><span dangerouslySetInnerHTML={{ __html:item.info }} /></a>
                                        :
                                        item.type === "tel" ?
                                        <a href={"tel:"+item.info}><span dangerouslySetInnerHTML={{ __html:item.info }} /></a>
                                        :
                                        item.type === "mailto" ?
                                        <a href={"mailto:"+item.info}><span dangerouslySetInnerHTML={{ __html:item.info }} /></a>
                                        :
                                        <span dangerouslySetInnerHTML={{ __html:item.info }} />
                                    }
                                </p>
                            </div>
                            )
                        :null
                        }
                    </div>
                </div>
            </div>
        </div>      
    )
  }
}
