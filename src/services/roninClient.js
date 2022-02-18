import parseAddress from "../utils/parseAddress";
import fetchPlus from "./fetchRetry";

const BASE_RONIN_URL = `https://explorer.roninchain.com`;

const roninClient = {
    getTokens: async (address) => {
        return await fetchPlus(`${BASE_RONIN_URL}/_next/data/UITHlIJIOn5fyqyXWX6gT/address/ronin%3A${parseAddress(address)}/token-holdings.json`, {}, 4)
    },
    getTransactions: async (address, page, pageSize) => {
        return await fetchPlus(`${BASE_RONIN_URL}/api/txs/0x${parseAddress(address)}?from=${page}&size=${pageSize}`, {}, 4)
    },
    getTransactionsERC20: async (address, page, pageSize) => {
        return fetchPlus(`${BASE_RONIN_URL}/api/tokentxs?addr=0x${parseAddress(address)}&from=${page}&size=${pageSize}&token=ERC20`, {}, 4)
    },
    getActions: async (payload) => {
        return await fetchPlus("https://decoder.roninchain.com/decoder/actions", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }, 4)
    },
    getExchangeRate: async () => {
        return await fetchPlus('https://exchange-rate.axieinfinity.com/', {}, 4)
    }
}

export default roninClient
