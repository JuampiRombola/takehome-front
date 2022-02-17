import parseAddress from "../utils/parseAddress";

const BASE_RONIN_URL = `https://explorer.roninchain.com`;

const roninClient = {
    getTokens: async (address) => {
        let response = await fetch(`${BASE_RONIN_URL}/_next/data/UITHlIJIOn5fyqyXWX6gT/address/ronin%3A${parseAddress(address)}/token-holdings.json`)
        response = await response.json()
        return response
    },
    getTransactions: async (address, page, pageSize) => {
        let response = await fetch(`${BASE_RONIN_URL}/_next/data/UITHlIJIOn5fyqyXWX6gT/address/ronin%3A${parseAddress(address)}/txs.json?p=${page}&ps=${pageSize}`)
        response = await response.json()
        return response
    },
    getTransactionsERC20: async (address, page, pageSize) => {
        let response = await fetch(`${BASE_RONIN_URL}/api/tokentxs?addr=0x${parseAddress(address)}&from=${page}&size=${pageSize}&token=ERC20`)
        response = await response.json()
        return response
    },
    getActions: async (payload) => {
        let response = await fetch("https://decoder.roninchain.com/decoder/actions", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        response = await response.json()
        return response
    }
}

export default roninClient
