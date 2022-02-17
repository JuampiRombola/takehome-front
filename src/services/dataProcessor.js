import mockRoninClient from "../mocks/mockRoninClient";
import getTimestampSubtractDays from "../utils/getTimestampSubtractDays";
import formatFloatBalance from "../utils/formatFloatbalance";
import {AXIES_KEY, AXS_KEY, BOUGHT_AXIES_KEY, BREEDS_KEY, SLP_KEY, WETH_KEY} from "../components/stats-grid/statsKeys";

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

const _getActionsFromTransactions = async (rawTransactionsData) => {
    const txs = rawTransactionsData
        .filter((tx) => tx?.to === AXIE_MARKET_ADDRESS || tx?.to === AXIE_CONTRACT_ADDRESS)
        .map((tx) => ({
            contractAddress: tx.to,
            callData: tx.input,
            logs: []
        }))
    const actions = await mockRoninClient.getActions({ txs })
    return actions?.data
}

const _getTokensOwned = (rawTokensData) => {
    return rawTokensData?.pageProps?.balance?.results
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
        .filter((tx) => tx.tokenSymbol === AXS_KEY_RESPONSE)
        .map((tx) => formatFloatBalance(tx.balance, tx.tokenDecimals))
        .pop() || '0'
}

const _getWETHStat = (rawTokensData) => {
    return rawTokensData
        .filter((tx) => tx.tokenSymbol === WETH_KEY_RESPONSE)
        .map((tx) => formatFloatBalance(tx.balance, tx.tokenDecimals))
        .pop() || '0'
}

const _getAxiesStat = (rawTokensData) => {
    return rawTokensData
        .filter((tx) => tx.tokenSymbol === AXIES_KEY_RESPONSE)
        .map((tx) => tx.balance)
        .pop() || '0'
}

const _getBoughtAxiesStat = (rawActionsData) => {
    return rawActionsData.filter((label) => label === BUY_NFT_TEXT).length.toString()
}

const _getBreedsStat = (rawActionsData) => {
    return rawActionsData.filter((label) => label === BREED_KEY_TEXT).length.toString()
}

const dataProcessor = {
    getStatsFromAddress: async (address) => {
        const rawTokensData = await mockRoninClient.getTokens(address)
        const rawTokensOwned = _getTokensOwned(rawTokensData)
        const rawTransactionsERC20Data = await _getTransactionsLoopBack(address, mockRoninClient.getTransactionsERC20)
        const rawTransactionsData = await _getTransactionsLoopBack(address, mockRoninClient.getTransactions)
        const rawActionsData = await _getActionsFromTransactions(rawTransactionsData)

        const boughtAxies = _getBoughtAxiesStat(rawActionsData)
        const breeds = _getBreedsStat(rawActionsData)

        return {
            isValidAddress: true, //TODO: do it dynamic
            isInvestor: boughtAxies !== '0' || breeds !== '0',
            stats: {
                [SLP_KEY]: _getClaimedSLPStat(rawTransactionsERC20Data),
                [AXS_KEY]: _getAXSStat(rawTokensOwned),
                [WETH_KEY]: _getWETHStat(rawTokensOwned),
                [AXIES_KEY]: _getAxiesStat(rawTokensOwned),
                [BOUGHT_AXIES_KEY]: boughtAxies,
                [BREEDS_KEY]: breeds
            }
        }
    }
}

export default dataProcessor
