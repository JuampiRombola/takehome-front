const getTimestampSubtractDays = (days) => {
    const date = new Date()
    date.setDate(date.getDate() - days)
    return Math.floor(date.getTime() / 1000)
}

export default getTimestampSubtractDays
