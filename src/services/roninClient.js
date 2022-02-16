const parseAddress = (address) => {
    return address.slice(address.indexOf(':') + 1)
}

const roninClient = {
    getTokens: async (address) => {
        let response = await fetch(`https://explorer.roninchain.com/_next/data/UITHlIJIOn5fyqyXWX6gT/address/${parseAddress(address)}/token-holdings.json`)
        response = await response.json()
        return response
    },
    getTransactions: async () => {
        let response = await fetch('https://www.g.com')
        response = await response.json()
        return response
    }
}

export default roninClient
