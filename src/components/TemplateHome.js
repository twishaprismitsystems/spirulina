import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import SiteInfo from './SiteInfo';

export default class TemplateHome extends Component {

    constructor(){
		super();
		this.state = {
			responsiveowl:{
				0:{
					items:1,
				},
				575:{
					items:2,
				},
				768:{
					items:3,
				},
				1199:{
					items:4,
				}
			},
			responsiveowlnews:{
				responsive:{
					0:{
						items:1,
					},
					575:{
						items:1,
					},
					768:{
						items:2,
					},
					1199:{
						items:3,
					}
				}
			}
		}
	}

    seturl(url){
        let urlar = url.split("/");
        if(urlar[urlar.length - 2] === 'control'){
            return '';
        }
        return "/"+urlar[urlar.length - 2];
    }

    setdate(date){
        let dtar = date.split("T"); 
        return new Date(dtar[0]).getDate();
    }

    setmonth(date){
        let dtar = date.split("T"); 
        return new Date(dtar[0]).toLocaleString('en-us',{month:'short'});
    }

    render() {
        return(
        <React.Fragment>
            
            <div id="main_banner" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        this.props.data.acf.main_section !== false ? 
                            this.props.data.acf.main_section.map((item,index)=>
                            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                <img src={item.image} className="d-block w-100" width="1366" height="600" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                <h3>{item.title}</h3>
                                <p dangerouslySetInnerHTML={{__html:item.description}} />
                                </div>
                            </div>
                            )
                        : null
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#main_banner" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#main_banner" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-fluid benefits-sec pt-100 pb-100">
                <div className="container"	>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6">
                        <div className="benefit-col benefit-col-one " data-aos="fade-right">
                                <h2 className="text-white">{this.props.data.acf.benefits_section.title}</h2>
                                <Link to={this.seturl(this.props.data.acf.benefits_section.view_more_link)} className="more-btn "> View More</Link>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-6 col-6">
                            <div className=" owl-benefits nav-align-right" >
                            {
                                this.props.data.acf.benefits_section.benefits_slider !== false ?
                                    <OwlCarousel className="owl-theme" autoplay nav dots={false} autoplayTimeout={3000} autoplaySpeed={2000} smartSpeed={1000} autoplayHoverPause={true} responsive={this.state.responsiveowl}>
                                    {
                                        this.props.data.acf.benefits_section.benefits_slider.map((item,index)=>
                                        <div className="item" key={index}>
                                            <a href={item.link} className="benefit-col">
                                                <div className="benefit-icon d-center">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="h5 benefit-title" dangerouslySetInnerHTML={{__html:item.title}} />
                                            </a>
                                        </div>   
                                        )
                                    }
                                    </OwlCarousel>   
                                : null
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>	

            <div className="container-fluid about-sec pt-100 pb-100">
                <div className="container">
                    <div className=" about-col col-md-6 col-lg-6 col-xl-6 " data-aos="fade-up">
                        <h3 className="sec-heading-title" style={{"color": "#2d2d48"}} >{this.props.data.acf.about_section.title}</h3>
                        <p dangerouslySetInnerHTML={{__html:this.props.data.acf.about_section.description}} />
                        <Link to={this.seturl(this.props.data.acf.about_section.view_more_link)} className="more-btn ">Read More</Link>
                    </div>
                </div>
            </div>	

            <div className="container-fluid healthy-recipe-sec pt-100 pb-100">
                <div className="container"	>
                    <div className="sec-heading" data-aos="fade-up">
                        <h3 className="text-center sec-heading-title" style={{"color": "#2d2d48"}}>{this.props.data.acf.healthy_recipe_section.title}</h3>
                        <p className="text-center " dangerouslySetInnerHTML={{__html:this.props.data.acf.healthy_recipe_section.description}} />
                    </div>

                        <div className="owl-recipe nav-v-center" style={{"marginBottom": "5rem"}} >
                        {
                            this.props.data.acf.healthy_recipe_section.recipe_slider !== false ?
                            <OwlCarousel className="owl-theme" autoplay nav dots={false} autoplayTimeout={3000} autoplaySpeed={2000} smartSpeed={1000} autoplayHoverPause={true} responsive={this.state.responsiveowl}>
                            {
                                this.props.data.acf.healthy_recipe_section.recipe_slider.map((item,index)=>
                                <div className="item" key={index}>
                                    <a href="#!" className="recipe-col">
                                        <div className="recipe-img">
                                            <img src={item.image} alt="" title="" width="270" height="175" />
                                        </div>
                                        <div className="recipe-detail">
                                            <h4 className="recipe-name">{item.title}</h4>
                                            <p className="recipe-disc" dangerouslySetInnerHTML={{__html:item.description}}  />
                                        </div>	
                                    </a>
                                </div>
                                )
                            }
                            </OwlCarousel>
                            : null
                        }
                        </div>		
                    {/* <a href="#!" className="more-btn d-table  mx-auto" data-aos="fade-up"	>View More</a> */}
                </div>
            </div>

            <div className="container-fluid latest-news-sec  pt-100 pb-100">
                <div className="container"> 
                    <div className="sec-heading" data-aos="fade-up">
                        <h3 className="text-center sec-heading-title" style={{"color": "#fff"}}>{this.props.data.acf.news_section.title}</h3>
                        <p className="text-center " style={{"color": "#fff"}} dangerouslySetInnerHTML={{__html:this.props.data.acf.news_section.description}}  />
                    </div>
                    
                    <div className="nav-align-right" style={{"marginBottom": "5rem"}}>
                    {
                        this.props.news !== false ?
                        <OwlCarousel className="owl-theme" margin={30} autoplay nav={true} dots={false} autoplayTimeout={3000} autoplaySpeed={2000} smartSpeed={1000} autoplayHoverPause={true} responsive={this.state.responsiveowlnews}>
                        {
                            this.props.news.map((item,index)=>
                            <div key={index} className="item">
                                <Link to={this.seturl(item.link)} className="news-col">
                                    <div className="news-upload-date">
                                        <span className="n-date"> {this.setdate(item.date)} </span>
                                        <span className="n-month"> {this.setmonth(item.date)} </span>
                                    </div>
                                    <img src={item.img_url} alt="" title="" width="270" height="175" />
                                    <div className="news-detail">
                                        <h4 className="news-title" dangerouslySetInnerHTML={{__html:item.title.rendered}} />
                                    </div>
                                </Link>
                            </div>   
                            )
                        }
                        </OwlCarousel>
                        : null
                    }
                        </div>
                    <Link to={ this.seturl(this.props.data.acf.news_section.view_more_link)} className="more-btn btn-style-light d-table  mx-auto" data-aos="fade-up">View More</Link>
                </div>
            </div>

            <SiteInfo contact={this.props.data.acf.contact_info} />
 
        </React.Fragment>
        )
    }
}
