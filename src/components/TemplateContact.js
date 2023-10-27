import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class TemplateContact extends Component {
  render() {
    return (
      <React.Fragment>
        <ContactForm contact={this.props.data.acf.contact_details} contactformid={this.props.data.acf.contact_details.contact_form_id} iscontact={true} />
      </React.Fragment>
    )
  }
}
