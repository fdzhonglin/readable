import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class EditPost extends Component {
  state = {
    title: '',
    owner: '',
    body: '',
  };

  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Group widths="equal">
          <Form.Input
            name="title"
            label="Title"
            placeholder="Post title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <Form.Input
            name="owner"
            label="Owner"
            placeholder="Your name"
            value={this.state.owner}
            onChange={this.handleChange}
          />
          <Form.TextArea
            name="body"
            label="Post Content"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default EditPost
