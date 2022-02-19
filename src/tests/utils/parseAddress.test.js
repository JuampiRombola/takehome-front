import parseAddress from "../../utils/parseAddress"

describe('parseAddress', () => {

    test('full address', async () => {
        const result = parseAddress('ronin:4d51e82c92c5e89176f006d8425330aa5ff3a4c4')
        expect(result).toEqual('4d51e82c92c5e89176f006d8425330aa5ff3a4c4')
    })

    test('address without ronin', async () => {
        const result = parseAddress('4d51e82c92c5e89176f006d8425330aa5ff3a4c4')
        expect(result).toEqual('4d51e82c92c5e89176f006d8425330aa5ff3a4c4')
    })

})
