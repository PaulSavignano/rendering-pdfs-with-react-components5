import React from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { insertDocument } from '../../api/documents/methods'
import { Bert } from 'meteor/themeteorchef:bert'

const handleInsertDocument = (event) => {
  event.preventDefault()
  const title = document.querySelector('[name="title"]')
  const body =document.querySelector('[name="body"]')
  if (title.value.trim() !== '' && body.value.trim() !== '') {
    insertDocument.call({
      title: title.value,
      body: body.value,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        title.value = ''
        body.value = ''
        Bert.alert('Document added!', 'success')
      }
    })
  } else {
    Bert.alert('Title and Body are both required.', 'danger')
  }
}

export const AddDocument = () => (
  <form onSubmit={ handleInsertDocument } className="AddDocument">
    <FormGroup>
      <FormControl
        type="text"
        name="title"
        placeholder="Type a document title"
      />
    </FormGroup>
    <FormGroup>
      <FormControl
        componentClass="textarea"
        name="body"
        placeholder="What do you want to say?"
      />
    </FormGroup>
    <Button type="submit" bsStyle="success">Add Document</Button>
  </form>
)
