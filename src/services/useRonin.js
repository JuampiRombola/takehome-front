import {useEffect, useState} from 'react'
import roninClient from './roninClient'

const useRonin = () => {
    const [address, setAddress] = useState("")
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const rawData = await roninClient.getTokens(address)
            setData({
                balance: rawData?.pageProps?.balance
            })
        }
        fetchData()
    }, [address])

    return {
        data,
        setAddress
    }
}

export default useRonin
