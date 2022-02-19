import createDataProcessor from "../../services/dataProcessor"
import mockRoninClient from "../mocks/mockRoninClient"
import {
    AXIES_KEY, AXS_DOLLARS_KEY,
    AXS_KEY,
    BOUGHT_AXIES_KEY,
    BREEDS_KEY, SLP_DOLLARS_KEY,
    SLP_KEY, WETH_DOLLARS_KEY,
    WETH_KEY
} from "../../components/stats-grid/statsKeys"

describe('data processor', () => {
    const dataProcessor = createDataProcessor(mockRoninClient)

    test('Scholar address', async () => {
        const address = 'ronin:4d51e82c92c5e89176f006d8425330aa5ff3a4c4'
        const statsFromAddress = await dataProcessor.getStatsFromAddress(address)
        const expectedResult = {
            isInvestor: false,
            isScholar: true,
            isValidAddress: true,
            stats: {
                [SLP_KEY]: '3562',
                [AXS_KEY]: '0',
                [WETH_KEY]: '0',
                [AXIES_KEY]: '3',
                [BOUGHT_AXIES_KEY]: '0',
                [BREEDS_KEY]: '0',
                [AXS_DOLLARS_KEY]: '0',
                [WETH_DOLLARS_KEY]: '0',
                [SLP_DOLLARS_KEY]: '83'
            }
        }
        expect(statsFromAddress).toEqual(expectedResult)
    })

    test('Investor address', async () => {
        const address = 'ronin:2b9fd5ebc7a6ce8539e2aec96774544b8d559732'
        const statsFromAddress = await dataProcessor.getStatsFromAddress(address)
        const expectedResult = {
            isInvestor: true,
            isScholar: false,
            isValidAddress: true,
            stats: {
                [SLP_KEY]: '0',
                [AXS_KEY]: '0.863713',
                [WETH_KEY]: '5.044085',
                [AXIES_KEY]: '0',
                [BOUGHT_AXIES_KEY]: '0',
                [BREEDS_KEY]: '0',
                [AXS_DOLLARS_KEY]: '47',
                [WETH_DOLLARS_KEY]: '13767',
                [SLP_DOLLARS_KEY]: '0'
            }
        }
        expect(statsFromAddress).toEqual(expectedResult)
    })

    test('Wrong address', async () => {
        const address = 'f'
        const statsFromAddress = await dataProcessor.getStatsFromAddress(address)
        const expectedResult = {
            isValidAddress: false
        }
        expect(statsFromAddress).toEqual(expectedResult)
    })

    test('Empty address', async () => {
        const address = ''
        const statsFromAddress = await dataProcessor.getStatsFromAddress(address)
        const expectedResult = {}
        expect(statsFromAddress).toEqual(expectedResult)
    })

})
