import React, { Component } from 'react';
import axios from 'axios';

import Loader from './Loader'
import TemplateDefault from './TemplateDefault';
import TemplateBenefit from './TemplateBenefit'
import TemplateProductInfo from './TemplateProductInfo';
import { Link } from 'react-router-dom';

export default class SubPage extends Component {

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
    axios.get('wp-json/wp/v2/pages?slug='+this.props.match.params.subpage).then((res)=>{
        this.setState({ page_data:res.data[0] , pagename: this.props.match.params.subpage, isdata:1 })
    });
  }

  componentDidUpdate(prevprops,prevState){
    if(this.props.match.params.subpage  !== prevprops.match.params.subpage){
      axios.get('wp-json/wp/v2/pages?slug='+this.props.match.params.subpage).then((res)=>{
        this.setState({ page_data:res.data[0] , pagename: this.props.match.params.subpage })
      });
    }
  }

  // componentWillReceiveProps(nextprops){
    // axios.get('wp-json/wp/v2/pages?slug='+nextprops.match.params.subpage).then((res)=>{
    //     this.setState({ page_data:res.data[0] , pagename: nextprops.match.params.page, isdata:1 })
    // });
  // }

  render() {
    return(
      <React.Fragment>
        <div className="container-fluid breadcrumb-bar">
          <div className="container">
            <div className="row">
              <h2 className="page-title text-white" >{this.settitle(this.props.match.params.subpage)}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item "><Link to={"/"+this.props.match.params.page}>{this.props.match.params.page}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{this.settitle(this.props.match.params.subpage)}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {
          this.state.isdata !== 0 ?
            this.state.page_data.template === "template-common.php" ?
                <TemplateDefault data={this.state.page_data} />
              :
              this.state.page_data.template === "template-benefits.php" ?
                <TemplateBenefit data={this.state.page_data} isscroll={true} />
              :
              this.state.page_data.template === "template-productinfo.php" ?
                <TemplateProductInfo data={this.state.page_data} />
              : null
          :
          <Loader />
        }

      </React.Fragment>
    )
  }
}
