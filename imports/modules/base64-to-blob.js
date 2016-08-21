const decodeBase64 = (string) => {
  return atob(string)
}

const getLength = (decodedString) => {
  return decodedString.length
}

const buildByteArray = (decodedString, decodedStringLength) => {
  const buffer = new ArrayBuffer(decodedStringLength)
  const array = new Uint8Array(buffer)
  for (let i = 0; i < decodedStringLength; i++) {
    array[i] = decodedString.charCodeAt(i)
  }
  console.log(array)
  return array
}

const createBlob = (byteArray) => {
  return new Blob([byteArray], { type: 'application/pdf' })
}

export const base64ToBlob = (base64String) => {
  const decodedString = decodeBase64(base64String)
  const decodedStringLength = getLength(decodedString)
  const byteArray = buildByteArray(decodedString, decodedStringLength)
  return byteArray ? createBlob(byteArray) : null
}
