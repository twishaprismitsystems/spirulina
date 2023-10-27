import React, { Component } from 'react';
import { withRouter } from "react-router";
import swal from 'sweetalert';

import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class ContactForm extends Component {
    
    constructor(){
        let path = '';
        if(window.location.hostname === "localhost"){
            path = window.location.protocol+"//"+window.location.hostname+"/spirulina/control/";
        }
        else{
            path = window.location.protocol+"//"+window.location.hostname+"/control/";
        }

        super();
        this.state = {
            path:path,
            contactformdata:[],
            isloading:0,
            response:'',
            isdata:0
        }
    }

    componentDidMount(){
        axios.get("wp-json/wp/v2/getcontactdata?contact_id="+this.props.contactformid).then((res)=>{
            this.setState({ contactformdata:res.data , isdata:1 })
        });
        // this.valuecheck = this.valuecheck.bind(this);
        // this.contactsubmit = this.contactsubmit.bind(this);
    }

    valuecheck = (e , index ) => {
        e.preventDefault();
            let textfields = [ ...this.state.contactformdata ];
            textfields[index] = {...textfields[index], value: e.target.value};
            this.setState({ contactformdata:textfields });
    }

    contactsubmit = (event) => {
        event.preventDefault();
        this.setState({ isloading : 1 });
        console.log(this.state.isloading);
        let fd = new FormData();
        this.state.contactformdata.map((item,i) =>
            i < this.state.contactformdata.length - 1 ? fd.append(item.name,item.value) : null
        )
        axios.post(this.state.path+"wp-json/contact-form-7/v1/contact-forms/"+this.props.contactformid+"/feedback",fd).then((res)=>{
            if(res.data.status === "mail_sent"){
                swal({ text: res.data.message, icon: "success", buttons: { confirm: "Ok" } }).then(()=>{
                    let textfields = [ ...this.state.contactformdata ];
                    this.state.contactformdata.map((item,i)=>
                        i < this.state.contactformdata.length - 1 ? textfields[i] = {...textfields[i], value: ''} : null
                    )
                    this.setState({ contactformdata:textfields , isloading : 0  });
                });
            }
            else{
                swal({ text: res.data.message, icon: "error", buttons: { confirm: "Ok" } }).then(()=>{
                    let textfields = [ ...this.state.contactformdata ];
                    this.state.contactformdata.map((item,i)=>
                        i < this.state.contactformdata.length - 1 ? textfields[i] = {...textfields[i], value: ''} : null
                    )
                    this.setState({ contactformdata:textfields , isloading : 0  });
                });
            }
        });
    }
  
    render() {
    return (
    <React.Fragment>
    <div className="container-fluid contact-sec  pt-100 ">
		<div className="sec-heading">
			<h3 className="text-center sec-heading-title" >{this.props.contact.title}</h3>
			 <p className="text-center " dangerouslySetInnerHTML={{__html:this.props.contact.description}} />
		</div>
        <div className="container">
            <div className="row justify-content-center">
                
                <div className="col-xl-9 col-lg-10 col-md-12 row mb-5">
                {
                    this.props.contact.contact_info !== false ?
                    this.props.contact.contact_info.map((item,index)=>
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
                    : null
                }
                </div>
                <div className="row ">
                    {
                        this.state.isdata !== 0 ?
                        <div className="col-md-7 col-sm-7 contact-form mx-auto mt-5">
                            <form onSubmit={this.contactsubmit} className="contact_form">
                                <div className="row">
                                    {
                                    this.state.contactformdata.length !== 0 ?
                                    this.state.contactformdata.map((item,index)=>
                                        index !== this.state.contactformdata.length - 1 ?
                                            <div key={index} className="col-12 form_field">
                                                {
                                                item.type === "textarea" ?
                                                    <textarea type={item.type} rows="5" placeholder="The maximum 100 characters allowed in the message box:" name={item.name} maxLength="100" onChange={(e)=> this.valuecheck(e,index) } value={item.value} required></textarea>            
                                                    :
                                                    <input type={item.type} placeholder={"Enter Your "+item.name+" .:"} name={item.name} required="" onChange={(e)=> this.valuecheck(e,index) } value={item.value} required />
                                                }
                                            </div>
                                            :
                                            null
                                    )
                                    : null
                                    }
                                    <div className="col-12 ">
                                        <button type={this.state.contactformdata[this.state.contactformdata.length-1].type} className="submit_btn more-btn" value={this.state.contactformdata[this.state.contactformdata.length-1].value}>{this.state.contactformdata[this.state.contactformdata.length-1].value}  { this.state.isloading === 1 ? <img src="/assets/img/ajax-loader.gif" alt="loader" height={15} width={15} /> : null } </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    </div>

    <div className=" map p-0" >
        {
            this.props.contact.map_location !== false ?
            <MapContainer center={[this.props.contact.map_location.lat, this.props.contact.map_location.lng]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[this.props.contact.map_location.lat, this.props.contact.map_location.lng]}>
                    <Popup>
                        {this.props.contact.map_location.address}
                    </Popup>
                </Marker>
            </MapContainer>
            :null
        }
    </div>

</React.Fragment>
            
    )
  }
}


export default withRouter(ContactForm);