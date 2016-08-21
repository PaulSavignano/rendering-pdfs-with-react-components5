import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { generateComponentAsPDF } from '../../../modules/server/generate-pdf'
import { Documents } from '../documents'
import { rateLimit } from '../../../modules/rate-limit'
import { Document } from '../../../ui/components/document'

export const downloadDocument = new ValidatedMethod({
  name: 'documents.downlaod',
  validate: new SimpleSchema({
    documentId: { type: String },
  }).validator(),
  run({ documentId }) {
    const document = Documents.findOne({ _id: documentId })
    const fileName = `document_${document._id}.pdf`
    return generateComponentAsPDF({
      component: Document,
      props: { document },
      fileName,
    })
    .then((result) => {
      return result
    })
    .catch((error) => {
      throw new Meteor.Error('500', error)
    })
  }
})

rateLimit({
  methods: [
    downloadDocument,
  ],
  limit: 1,
  timeRange: 1000,
})
