const formatFloatBalance = (balance, tokenDecimals) => {
    const balanceFilled = balance.padStart(tokenDecimals, '0')
    const num = balanceFilled.slice(0, balanceFilled.length - tokenDecimals) + "." + balanceFilled.slice(balanceFilled.length - tokenDecimals)
    return parseFloat(num).toFixed(6)
}

export default formatFloatBalance
