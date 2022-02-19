import getTimestampSubtractDays from "../utils/getTimestampSubtractDays";
import formatFloatBalance from "../utils/formatFloatbalance";
import {
    AXIES_KEY,
    AXS_DOLLARS_KEY,
    AXS_KEY,
    BOUGHT_AXIES_KEY,
    BREEDS_KEY, SLP_DOLLARS_KEY,
    SLP_KEY, WETH_DOLLARS_KEY,
    WETH_KEY
} from "../components/stats-grid/statsKeys";

const MAX_LOOP_BACK = 30;
const PAGE_SIZE = 100;
const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'
const AXIE_MARKET_ADDRESS = '0x213073989821f738a7ba3520c3d31a1f9ad31bbd'
const AXIE_CONTRACT_ADDRESS = '0x32950db2a7164ae833121501c797d79e7b79d74c'
const BUY_NFT_TEXT = "Buy NFT"
const BREED_KEY_TEXT = "Breed Axies"

const AXS_KEY_RESPONSE = "AXS"
const WETH_KEY_RESPONSE = "WETH"
const AXIES_KEY_RESPONSE = "AXIE"
const SLP_KEY_RESPONSE = "SLP"

const _getTransactionsLoopBack = async (address, fetchFunction) => {
    const stopTimestamp = getTimestampSubtractDays(MAX_LOOP_BACK);
    let totalTransactions = Infinity
    let currentTimestamp = Infinity
    let currentPage = 0
    let transactions = []

    while (currentPage * MAX_LOOP_BACK < totalTransactions && currentTimestamp > stopTimestamp) {
        const rawTransactionsData = await fetchFunction(address, currentPage + 1, PAGE_SIZE)
        totalTransactions = rawTransactionsData?.total
        currentTimestamp = rawTransactionsData?.results?.slice(-1).pop()?.timestamp
        currentPage += 1
        transactions = [...transactions, ...rawTransactionsData?.results]
    }

    return transactions
}

const _getActionsFromTransactions = async (roninClient, rawTransactionsData) => {
    const txs = rawTransactionsData
        .filter((tx) => tx?.to === AXIE_MARKET_ADDRESS || tx?.to === AXIE_CONTRACT_ADDRESS)
        .map((tx) => ({
            contractAddress: tx.to,
            callData: tx.input,
            logs: []
        }))
    if (txs.length === 0) {
        return []
    }
    const actions = await roninClient.getActions({ txs })
    return actions?.data
}

const _getClaimedSLPStat = (rawTransactionsERC20Data) => {
    return rawTransactionsERC20Data
        .filter((tx) => tx?.token_symbol === SLP_KEY_RESPONSE && tx?.from === NULL_ADDRESS)
        .map((tx) => parseInt(tx.value))
        .reduce((x, y) => x + y, 0)
        .toString()
}

const _getAXSStat = (rawTokensData) => {
    return rawTokensData
        .filter((tx) => tx.token_symbol === AXS_KEY_RESPONSE)
        .map((tx) => formatFloatBalance(tx.balance, tx.token_decimals))
        .pop() || '0'
}

const _getWETHStat = (rawTokensData) => {
    return rawTokensData
        .filter((tx) => tx.token_symbol === WETH_KEY_RESPONSE)
        .map((tx) => formatFloatBalance(tx.balance, tx.token_decimals))
        .pop() || '0'
}

const _getAxiesStat = (rawTokensData) => {
    return rawTokensData
        .filter((tx) => tx.token_symbol === AXIES_KEY_RESPONSE)
        .map((tx) => tx.balance)
        .pop() || '0'
}

const _getBoughtAxiesStat = (rawActionsData) => {
    return rawActionsData.filter((label) => label === BUY_NFT_TEXT).length.toString()
}

const _getBreedsStat = (rawActionsData) => {
    return rawActionsData.filter((label) => label === BREED_KEY_TEXT).length.toString()
}

const _convertToDollars = (value, rate) => {
    return (parseFloat(value) * rate).toFixed(0)
}

const _isInvestor = (axs, weth) => {
    return axs !== '0' || weth !== '0'
}

const _isScholar = (slp, axies) => {
    return axies >= '3' || slp !== '0'
}

const createDataProcessor = (roninClient) => ({
    getStatsFromAddress: async (address) => {
        if (address === '') {
            return {}
        }
        try {
            const rawTokensData = await roninClient.getTokens(address)
            const rawTokensOwned = rawTokensData?.results || []
            const rawTransactionsERC20Data = await _getTransactionsLoopBack(address, roninClient.getTransactionsERC20)
            const rawTransactionsData = await _getTransactionsLoopBack(address, roninClient.getTransactions)
            const rawActionsData = await _getActionsFromTransactions(roninClient, rawTransactionsData)
            const exchangeRate = await roninClient.getExchangeRate()

            const slp = _getClaimedSLPStat(rawTransactionsERC20Data)
            const axies = _getAxiesStat(rawTokensOwned)
            const axs = _getAXSStat(rawTokensOwned)
            const weth = _getWETHStat(rawTokensOwned)

            return {
                isValidAddress: true,
                isInvestor: _isInvestor(axs, weth),
                isScholar: !_isInvestor(axs, weth) && _isScholar(slp, axies),
                stats: {
                    [SLP_KEY]: slp,
                    [AXS_KEY]: axs,
                    [WETH_KEY]: weth,
                    [AXIES_KEY]: axies,
                    [BOUGHT_AXIES_KEY]:  _getBoughtAxiesStat(rawActionsData),
                    [BREEDS_KEY]: _getBreedsStat(rawActionsData),
                    [AXS_DOLLARS_KEY]: _convertToDollars(axs, exchangeRate?.axs?.usd),
                    [WETH_DOLLARS_KEY]: _convertToDollars(weth, exchangeRate?.eth?.usd),
                    [SLP_DOLLARS_KEY]: _convertToDollars(slp, exchangeRate?.slp?.usd)
                }
            }
        } catch (e) {
            return ({
                isValidAddress: false
            })
        }
    }
})

export default createDataProcessor
