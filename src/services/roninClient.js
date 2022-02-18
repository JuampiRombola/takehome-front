import parseAddress from "../utils/parseAddress";
import fetchRetry from "./fetchRetry";

const BASE_RONIN_URL = `https://explorer.roninchain.com/api`;
const MAX_RETRIES = 5

const roninClient = {
    getTokens: async (address) => {
        return await fetchRetry(`${BASE_RONIN_URL}/tokenbalances/0x${parseAddress(address)}`, MAX_RETRIES)
    },
    getTransactions: async (address, page, pageSize) => {
        return await fetchRetry(`${BASE_RONIN_URL}/txs/0x${parseAddress(address)}?from=${page}&size=${pageSize}`, MAX_RETRIES)
    },
    getTransactionsERC20: async (address, page, pageSize) => {
        return fetchRetry(`${BASE_RONIN_URL}/tokentxs?addr=0x${parseAddress(address)}&from=${page}&size=${pageSize}&token=ERC20`, MAX_RETRIES)
    },
    getActions: async (payload) => {
        return await fetchRetry("https://decoder.roninchain.com/decoder/actions", MAX_RETRIES, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
    },
    getExchangeRate: async () => {
        return await fetchRetry('https://exchange-rate.axieinfinity.com/', MAX_RETRIES)
    }
}

export default roninClient
