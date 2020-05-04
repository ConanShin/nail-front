const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-|]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i') // fragment locator

const validateUrl = string => {
    return !!pattern.test(string)
}

const convertUrl2Link = string => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return string.replace(urlRegex, url => '<a href="' + url + '" target="_blank">' + url + '</a>')
}

export {validateUrl, convertUrl2Link}