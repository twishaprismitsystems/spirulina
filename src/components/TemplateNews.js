import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default class TemplateNews extends Component {

  constructor(props){
    super(props);
    let morebutton = 0;
    if(this.props.data.posts.length < 6 ){ morebutton = 1 }
    this.state = {
      page:2,
      isbutton:morebutton,
      post_data:[],
      isdata:0
    }
  }

  componentDidMount(){

  }


  setdate(date){
    let dtar = date.split("T"); 
    return new Date(dtar[0]).getDate();
  }

  setmonth(date){
      let dtar = date.split("T"); 
      return new Date(dtar[0]).toLocaleString('en-us',{month:'short'});
  }

  seturl(url){
    let urlar = url.split("/");
    if(urlar[urlar.length - 2] === 'control'){
        return '';
    }
    return "/"+urlar[urlar.length - 2];
  }

  loadmoreposts(){
    axios.get('wp-json/wp/v2/getposts?page='+this.state.page).then((res)=>{
      if(res.data.length === 0 ){
        swal({ text: "No New News Found", icon: "warning", buttons: { confirm: "Ok" } }).then(()=>{
          this.setState({ isbutton:1 });
        });
      }
      else{
        let page = this.state.page+1;
        this.setState({ post_data:res.data , page: page });
      }
    });
  }

  render() {
    return(
      <div className="container-fluid  pt-100 pb-100" >
        <div className="container">
          <div className="row">
            {
              this.props.data.posts.length !== 0 ?
                this.props.data.posts.map((post,index)=>
                <div key={index} className="col-lg-4 col-md-6 col-sm-6 ">
                  <Link to={this.seturl(post.url)} className="news-col" data-aos={ index > 2 ? "fade-up" : '' } >
                    <div className="news-upload-date">
                      <span className="n-date">{this.setdate(post.date)}</span>
                      <span className="n-month">{this.setmonth(post.date)} </span>
                    </div>
                    <img src={post.img_url} alt="" title="" width="270" height="175" />
                    <div className="news-detail">
                      <h4 className="news-title">{post.title}</h4>
                    </div>	
                  </Link>
                </div>
                )
              : null
            }
          </div>
          <button disabled={this.state.isbutton === 0 ? false : true} onClick={(e)=>this.loadmoreposts()} className="more-btn  btn-center more-posts">More</button>
        </div>
      </div>
    )
  }
}
