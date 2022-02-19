import mockScholarTokenHolding from "./responses/mockScholarTokenHolding"
import mockInvestorTokenHolding from "./responses/mockInvestorTokenHolding"
import mockInvestorTransactionsERC20Page1Scholar from "./responses/mockScholarTransactionsERC20Page1"
import mockScholarTransactionsERC20Page2 from "./responses/mockScholarTransactionsERC20Page2"
import mockInvestorTransactionsERC20Page1 from "./responses/mockInvestorTransactionsERC20Page1"
import mockInvestorTransactionsERC20Page2 from "./responses/mockInvestorTransactionsERC20Page2"
import mockScholarTransactionsPage1 from "./responses/mockScholarTransactionsPage1"
import mockScholarTransactionsPage2 from "./responses/mockScholarTransactionsPage2"
import mockInvestorTransactionsPage1 from "./responses/mockInvestorTransactionsPage1"
import mockInvestorTransactionsPage2 from "./responses/mockInvestorTransactionsPage2"
import mockActions from "./responses/mockActions"
import mockExchange from "./responses/mockExchange"

import parseAddress from "../../utils/parseAddress"

const mockRoninClient = {
    getTokens: async (address) => {
        if (parseAddress(address) === '4d51e82c92c5e89176f006d8425330aa5ff3a4c4') {
            return mockScholarTokenHolding
        }
        if (parseAddress(address) === '2b9fd5ebc7a6ce8539e2aec96774544b8d559732') {
            return mockInvestorTokenHolding
        }
        throw Error
    },
    getTransactionsERC20: async (address, page, _) => {
        if (parseAddress(address) === '4d51e82c92c5e89176f006d8425330aa5ff3a4c4') {
            return page === 1 ? mockInvestorTransactionsERC20Page1Scholar : mockScholarTransactionsERC20Page2
        }
        return page === 1 ? mockInvestorTransactionsERC20Page1 : mockInvestorTransactionsERC20Page2
    },
    getTransactions: async (address, page, _) => {
        if (parseAddress(address) === '4d51e82c92c5e89176f006d8425330aa5ff3a4c4') {
            return page === 1 ? mockScholarTransactionsPage1 : mockScholarTransactionsPage2
        }
        return page === 1 ? mockInvestorTransactionsPage1 : mockInvestorTransactionsPage2
    },
    getActions: async (_) => {
        return mockActions
    },
    getExchangeRate: async () => {
        return mockExchange
    }
}

export default mockRoninClient
