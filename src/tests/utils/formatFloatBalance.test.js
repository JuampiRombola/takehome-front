import formatFloatBalance from "../../utils/formatFloatbalance"

describe('formatFloatBalance', () => {

    test('Float number', async () => {
        const result = formatFloatBalance('5254872269874583125', 18)
        expect(result).toEqual('5.254872')
    })

    test('Float number rounding up', async () => {
        const result = formatFloatBalance('5254872869874583125', 18)
        expect(result).toEqual('5.254873')
    })

    test('Float number with padding', async () => {
        const result = formatFloatBalance('1009290973930906', 18)
        expect(result).toEqual('0.001009')
    })

})
