import { connect } from "react-redux";
import ContactForm from "../components/ContactForm";
import {contactAction} from '../services/actions/contactAction'

const mapStateToProps = state => ({
    contactdata:state.contactReducer.contactData,
})

const mapDispatchToProps = dispatch => ({
    AddContactFormData : (contact_id) => dispatch(contactAction(contact_id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactForm);