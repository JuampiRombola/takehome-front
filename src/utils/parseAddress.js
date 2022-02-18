const parseAddress = (address) => {
    return address.slice(address.indexOf(':') + 1)
}

export default parseAddress
