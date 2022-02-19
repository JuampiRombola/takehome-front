import getTimestampSubtractDays from "../../utils/getTimestampSubtractDays"

describe('getTimestampSubtractDays', () => {

    test('0 days', async () => {
        const result = getTimestampSubtractDays(0)
        const currentTimestamp = Date.now()
        expect(result).toBeGreaterThanOrEqual(currentTimestamp - 10)
        expect(result).toBeLessThan(currentTimestamp + 10)
    })

    test('30 days', async () => {
        const result = getTimestampSubtractDays(30)
        const date = new Date()
        date.setDate(date.getDate() - 30)
        expect(result).toBeGreaterThanOrEqual(date.getTime() - 10)
        expect(result).toBeLessThan(date.getTime() + 10)
    })

})
