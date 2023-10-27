import React, { Component } from 'react';
import TemplateHome from './TemplateHome';
import Loader from './Loader';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
		}
	}

	componentDidMount(){
		if(this.props.homedata.length === 0 ){
			this.props.AddNewsDataHandler();
            this.props.AddHomeHandler();
		}
        else{
		}
	}
	
	render() {
		return(
			<React.Fragment>
			{
				this.props.homedata.length !== 0 && this.props.newsdata.length !== 0 ?
				<TemplateHome data={this.props.homedata} news={this.props.newsdata} />
				:
				<Loader />
			}
			</React.Fragment>
		)
	}
}

export default Home;