import React, { Component } from 'react';

export default class NewsDetails extends Component {
  render() {
    return(
        <div className="container-fluid  pt-100 pb-100" >
        <div className="container">
            <article>
                <div className="row">
                <div className="col-md-8">
                    <figure className="w-100 featured-image">
                        <img src={this.props.content.img_url} className="figure-img img-responsive rounded" alt="..." />
                    </figure>
                </div>
                <div className="col-md-4">
                    <div className="author mb-5 d-flex align-items-center">
                    <a href="#" className="avtar-img" ></a>
                    <div className="ms-3 info">
                    <span>Written by</span>
                    <h3><a href="#">Dave Lewis</a>, <span>October 04, 2018</span></h3>
                    </div>
                    </div>
                    <ul className="social-nav post-shares">
                        <li className="social-item"><a href="#!" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="social-item"><a href="#!" className="social-link"><i className="fab fa-twitter"></i></a></li>
                        <li className="social-item"><a href="#!" className="social-link"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                    <ul className="meta">
                        <li><i className="fas fa-heart"></i>3</li>
                        <li><i className="fas fa-thumbs-up" ></i>100</li>
                        <li><i className="fas fa-comments" ></i>5</li>
                    </ul>
                </div>
                </div>

                <div className="article-content ">
                    <h3 className="article-title">{this.props.content.title.rendered}</h3>
                    <p dangerouslySetInnerHTML={{__html:this.props.content.content.rendered}} />
                </div>
            </article>
        </div>
</div>	
    )
  }
}
