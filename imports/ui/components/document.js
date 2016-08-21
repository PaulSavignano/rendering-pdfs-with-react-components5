import React from 'react'
import InlineCss from 'react-inline-css'
import { ListGroupItem, Button } from 'react-bootstrap'

const removeDocument = (event) => {
  removeDocument.call({
    documentId: document._id
  })
}

const downloadPDF = (event) => {
  event.preventDefault()

}

export const Document = ({ document }) => (
  <InlineCss stylesheet={`
    .Document {
    font-family: "Helvetica Neue", Helvetica", "Arial", sans-serif;
    }
    @media print {
    .Document {
    display: block;
    border: 1px solid red;
    padding: 20px;
    }
    .btn { display: none }
    hr { display: none }
    h3 {
    font-size: 28px;
    margin-top: 0px;
    margin-bottom: 0px;
    }
    p {
    margin-top: 10px;
    margin-bottom: 0px;
    font-size: 18px;
    }
    }
  `}>
    <ListGroupItem className="Document">
      <Button data-id={ document._id } bsStyle="success" onClick={ downloadPDF }>Download</Button>
      <Button onClick={ removeDocument } bsStyle="danger">Remove</Button>
      <hr/>
      <h3>{ document.title }</h3>
      <p>{ document.body }</p>
    </ListGroupItem>
  </InlineCss>
)

Document.propTypes = {
  document: React.PropTypes.object.isRequired,
}
