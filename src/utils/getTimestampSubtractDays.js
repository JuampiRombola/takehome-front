const getTimestampSubtractDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days)
    return date.getTime()
}

export default getTimestampSubtractDays
