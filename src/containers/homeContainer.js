import { connect } from "react-redux";
import Home from "../components/Home";
import {homeAction,newsAction} from '../services/actions/homeAction'

const mapStateToProps = state => ({
    homedata:state.homeReducer.homeData,
    newsdata:state.homeReducer.newsData
})

const mapDispatchToProps = dispatch => ({
    AddHomeHandler : () => dispatch(homeAction()),
    AddNewsDataHandler : () => dispatch(newsAction()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);