import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Loader from './Loader';
import TemplateAbout from './TemplateAbout';
import TemplateContact from './TemplateContact';
import TemplateNews from './TemplateNews'
import TemplateBenefit from './TemplateBenefit';
import TemplatePage from './TemplatePage';
import NewsDetails from './NewsDetails';


export default class MainPage extends Component {

  constructor(){
    super();
    this.state = {
      page_data:{},
      pagename:'',
      ispage:0,
      isdata:0
    }
  }

  settitle(title){
    return title.replaceAll("-"," ");
  }

  async componentDidMount(){
    axios.get('wp-json/wp/v2/pages?slug='+this.props.match.params.page).then((res)=>{
      if (res.data[0]) {
        this.setState({ page_data:res.data[0] , pagename: this.props.match.params.page, ispage:1 ,isdata:1 })
      }
      else{
        axios.get('wp-json/wp/v2/posts?slug='+this.props.match.params.page).then((res)=>{
          if (res.data[0]) {
            this.setState({ page_data:res.data, pagename: this.props.match.params.page, ispage:0 , isdata:1})
          }
          else{
            this.props.history.push("/notfound");
          }
        });
      }
    });
  }
  
  componentDidUpdate(prevprops,prevState){
    if(this.props.match.params.page  !== prevprops.match.params.page){
      axios.get('wp-json/wp/v2/pages?slug='+this.props.match.params.page).then((res)=>{
        if (res.data[0]) {
          this.setState({ page_data:res.data[0] , pagename: this.props.match.params.page, ispage:1 , isdata:1 })
        }
        else{
          axios.get('wp-json/wp/v2/posts?slug='+this.props.match.params.page).then((res)=>{
            if (res.data[0]) {
              this.setState({ page_data:res.data, pagename: this.props.match.params.page, ispage:0 ,isdata:1 })
            }
            else{
              this.props.history.push("/notfound");
            }
          });
        }
      });
    }
  }

  // componentWillReceiveProps(nextprops){
    // axios.get('wp-json/wp/v2/pages?slug='+nextprops.match.params.page).then((res)=>{
    //   if (res.data[0]) {
    //     this.setState({ page_data:res.data[0] , pagename: nextprops.match.params.page, ispage:1 , isdata:1 })
    //   }
    //   else{
    //     axios.get('wp-json/wp/v2/posts?slug='+nextprops.match.params.page).then((res)=>{
    //       this.setState({ page_data:res.data, pagename: this.props.match.params.page, ispage:0 ,isdata:1 })
    //     });
    //   }
    // });
  // }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid  breadcrumb-bar " >
          <div className="container">
            <div className="row">
              <h2 className="page-title text-white" > {this.settitle(this.state.pagename)} </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{this.settitle(this.state.pagename)}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {
          this.state.isdata !== 0 ?
            this.state.ispage === 1 ?
              this.state.page_data.template === "template-about.php" ?
                <TemplateAbout data={this.state.page_data} />
              :
              this.state.page_data.template === "template-contact.php" ?
                <TemplateContact data={this.state.page_data} />
              :
              this.state.page_data.template === "template-news.php" ?
                <TemplateNews data={this.state.page_data} />
              :
              this.state.page_data.template === "template-benefits.php" ?
                <TemplateBenefit data={this.state.page_data} />
              :
              this.state.page_data.template === "template-page.php" ?
                <TemplatePage data={this.state.page_data} />
              :
              null
              :
                <NewsDetails content={this.state.page_data[0]} />
          :
          <Loader />
        }
      </React.Fragment>
    )
  }
}