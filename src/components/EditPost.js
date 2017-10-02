import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input label="First name" placeholder="First name" />
          <Form.Input label="Last name" placeholder="Last name" />
          <Form.Select label="Gender" options={options} placeholder="Gender" />
        </Form.Group>

        <Form.Group inline>
          <Label>Size</Label>
          <Form.Radio label="Small" value="sm" checked={value === 'sm'} onChange={this.handleChange} />
          <Form.Radio label="Medium" value="md" checked={value === 'md'} onChange={this.handleChange} />
          <Form.Radio label="Large" value="lg" checked={value === 'lg'} onChange={this.handleChange} />
        </Form.Group>

        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Form.Checkbox label="I agree to the Terms and Conditions" />

        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default FormExampleSubcomponentControl
