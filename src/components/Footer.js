import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Footer extends Component {

    constructor(){
        super();
        this.state = {
            data:[],
            isdata:0
        }
    }

    componentDidMount(){
        axios.get('wp-json/wp/v2/getfooterdata').then((res)=>{
            this.setState({ data:res.data , isdata:1 }) 
        }).catch(()=>{
        });
    }

    setpageurl(url){
        let urlar = url.split('/');
        return "/"+urlar[urlar.length-2];
    }

    render() {
        return (
            <React.Fragment>
                {
            this.state.isdata === 1 ?
            <footer> 
                <div className="container-fluid w-75">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                                <p> {this.state.data.footer_data.copyright_text }   &nbsp;
                                {
                                    this.state.data.length !== 0 ?
                                    this.state.data.footer_data.footer_pages.map((item,index)=>
                                        <Link key={index} to={this.setpageurl(item.page_link)} className="foo-nav-link"> &nbsp; {index === 0 ? null : " | " } &nbsp;  {item.page_title} </Link>
                                    )
                                    : null
                                }
                                </p>
                            </div>
                            <div className="col-md-4">
                                <ul className="social-nav">
                                    {
                                        this.state.data.length !== 0 ?
                                        this.state.data.footer_data.social_data.map((item,index)=>
                                        <li className="social-item" key={index}>
                                            <a href={item.link} className="social-link"><i className={item.icon}></i></a>
                                        </li>
                                        )
                                        :
                                        null
                                    }
                                </ul>
                            </div>
                        </div>
                </div>
            </footer>	
            : 
            null
            }
            </React.Fragment>
        );
    }
}

export default Footer;