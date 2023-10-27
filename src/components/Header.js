import React, { Component } from 'react';
import axios from 'axios'
import { Link  } from 'react-router-dom';
import { withRouter } from "react-router";

class Header extends Component {

    constructor(){
        super();
        this.state = {
            data:[],
            isdata:0,
            activetab:0,
        }
    }

    componentDidMount(){
        axios.get('wp-json/wp/v2/getmenu').then((res)=>{
            this.setState({ data:res.data , isdata:1 }) 
        }).catch(()=>{
        });
    }

    setactive = (slug) => {
        this.setState({ activetab:slug })
    }

    checkactive(slug){
        if(slug === '' && this.props.location.pathname === '/'){
            return "active"
        }
        if(this.props.location.pathname === slug){
            return "active";
        }
        return '';
    }

    setmainurl(url){
        let urlar = url.split("/");
        if(urlar[urlar.length - 2] === 'control'){
            return '';
        }
        return "/"+urlar[urlar.length - 2];
    }

    setsuburl(url){
        let urlar = url.split("/");
        return "/"+urlar[urlar.length - 3]+'/'+urlar[urlar.length - 2];
    }

    render() {
        return (
            <header className="">
                {
                    this.state.isdata === 1 ?
                    <React.Fragment>
                        <section  className="top-header">
                            <div className="container-fluid d-flex w-75">
                                <ul className="social-nav">
                                    {
                                        this.state.data.length !== 0 ?
                                            this.state.data.header_data.social_data.map((item,index)=>
                                            <li className="social-item" key={index}>
                                                <a href={item.link} className="social-link"><i className={item.icon}></i></a>
                                            </li>
                                            )
                                        : null
                                    }
                                </ul>
                            </div>
                        </section>

                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid w-75">
                                <Link onClick={(e)=>this.setactive("/")} className="navbar-brand d-flex" to="/">
                                    <img src={this.state.data.header_data.logo.logo_image} alt="" title=" " width="34" height="60" />
                                    <span>{this.state.data.header_data.logo.logo_text}</span>
                                </Link>
                                
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-canvas" aria-controls="navbar-canvas" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                                </button>
                                
                                <div className="offcanvas offcanvas-start-lg" id="navbar-canvas">
                                    <div className="offcanvas-header d-flex d-lg-none">
                                        <h5 className="offcanvas-title text-white" id="offcanvasMenuLogo">Navbar</h5>
                                        <a href="#!" className="text-reset p-0" data-bs-dismiss="offcanvas" aria-label="close">
                                            <i className="fas fa-times" ></i>
                                        </a>
                                    </div>
                                    <div className="offcanvas-body p-0">
                                    <ul className="navbar-nav  ms-auto">
                                        {
                                            this.state.data.length !== 0 ?
                                                this.state.data.menu.map((item,index)=>
                                                <li key={index} className={item.submenu.length !== 0 ? "nav-item dropdown " + this.checkactive(this.setmainurl(item.url)) : "nav-item " + this.checkactive(this.setmainurl(item.url))} onClick={(e) => this.setactive(this.setmainurl(item.url))}>
                                                    <Link className="nav-link " aria-current="page" to={this.setmainurl(item.url)} > {item.title} </Link>
                                                    {
                                                        item.submenu.length !== 0 ?
                                                        <React.Fragment>
                                                        <span className="dropdown-toggle" id="Submenu" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                                        <ul className="dropdown-menu" aria-labelledby="Submenu">
                                                            {
                                                                item.submenu.map((subitem,subindex) =>
                                                                    <li key={subindex}><Link className={"dropdown-item "+this.checkactive(this.setsuburl(subitem.url))} onClick={()=>this.setactive(this.setsuburl(subitem.url))} to={this.setsuburl(subitem.url)}>{subitem.title}</Link></li>
                                                                )
                                                            }
                                                        </ul>
                                                        </React.Fragment>
                                                        :
                                                        null
                                                    }
                                                </li>
                                                )
                                            : null
                                        }
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </React.Fragment>
                    :
                    null
                }
            </header>
        );
    }
}

export default withRouter(Header);