import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css';

const uuidv4 = require('uuid/v4');

const SERVER_ROOT = 'http://localhost:3001'
const POSTS_URL = `${SERVER_ROOT}/posts`

class EditPost extends Component {
  state = {
    title: '',
    owner: '',
    body: '',
    category: '',
  };

  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value,
    });
  };

  handleSelect = (name) => {
    const setValue = (e, { value }) => {
      this.setState({
        [name]: value,
      });
    };

    return setValue;
  };

  submit = (e) => {
    e.preventDefault();

    fetch(
      POSTS_URL,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Johnny dev machin',
        },
        body: JSON.stringify({
          ...this.state,
          id: uuidv4(),
          timestamp: Date.now(),
        }),
      }
    ).then((res) => {
      console.log(res);
    })
  };

  render() {
    const { categories } = this.props;
    const setValue = this.handleSelect('category');
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
          <Form.Select
            name="category"
            label="Category"
            options={categories}
            placeholder=""
            onChange={setValue}
          />
        </Form.Group>

        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

EditPost.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default EditPost
