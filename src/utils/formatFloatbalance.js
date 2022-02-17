const formatFloatBalance = (balance, tokenDecimals) => {
    const num = balance.slice(0, balance.length - tokenDecimals) + "." + balance.slice(balance.length - tokenDecimals)
    return parseFloat(num).toFixed(6)
}

export default formatFloatBalance
