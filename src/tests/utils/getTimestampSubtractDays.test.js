import getTimestampSubtractDays from "../../utils/getTimestampSubtractDays"

describe('getTimestampSubtractDays', () => {

    test('0 days', async () => {
        const result = getTimestampSubtractDays(0)
        const currentTimestamp = Date.now()
        expect(result).toBeGreaterThanOrEqual(Math.floor(currentTimestamp / 1000) - 10)
        expect(result).toBeLessThan(Math.floor(currentTimestamp / 1000) + 10)
    })

    test('30 days', async () => {
        const result = getTimestampSubtractDays(30)
        const date = new Date()
        date.setDate(date.getDate() - 30)
        expect(result).toBeGreaterThanOrEqual(Math.floor(date.getTime() / 1000) - 10)
        expect(result).toBeLessThan(Math.floor(date.getTime() / 1000) + 10)
    })

})
