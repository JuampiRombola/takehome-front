import {useEffect, useState} from 'react'
import createDataProcessor from "./dataProcessor"
import roninClient from "./roninClient"

const useRonin = () => {
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const dataProcessor = createDataProcessor(roninClient)

    useEffect(() => {
        const fetchDataFromAddress = async () => {
            setLoading(true)
            setData({})
            const statsFromAddress = await dataProcessor.getStatsFromAddress(address)
            setData(statsFromAddress)
            setLoading(false)
        }
        fetchDataFromAddress()
    }, [address])

    return {
        data,
        address,
        loading,
        setAddress,
        setLoading
    }
}

export default useRonin
