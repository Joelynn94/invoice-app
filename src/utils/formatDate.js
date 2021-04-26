const formatDate = (strDate) => {
  if(strDate) {
    const date = new Date(strDate)
    strDate = date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    return strDate.replace(/[, ]+/g, " ").trim()
  } else {
    const date = new Date()
    let format = date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    return format.replace(/[, ]+/g, " ").trim()
  }
}

export default formatDate;