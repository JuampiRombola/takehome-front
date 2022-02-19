import {useContext, useState} from 'react'
import {CircularProgress, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {CheckIcon, SearchIcon, SmallCloseIcon} from "@chakra-ui/icons";
import {RoninContext} from "../../services/roninContext";

const SearchBar = () => {
    const {address, setAddress, loading, setLoading, data} = useContext(RoninContext)
    const [timeoutId, setTimeoutId] = useState(null);

    const calculateBorderColor = () => {
        if (loading || !address || !data.hasOwnProperty('isValidAddress')) {
            return 'gray.700'
        }
        return data.isValidAddress ?'green.500' : 'red.500'
    }

    const getRightIcon = () => {
        if (loading) {
            return (<CircularProgress isIndeterminate color='blue.300' size='20px' />)
        }
        if (!address || !data.hasOwnProperty('isValidAddress')) {
            return ''
        }
        return data.isValidAddress ? (<CheckIcon color='green.500' />) : (<SmallCloseIcon color='red.500' />)
    }

    const searchAddress = (e) => {
        setLoading(e.target.value !== '')
        clearTimeout(timeoutId)
        setTimeoutId(setTimeout(() => {
            setAddress(e.target.value)
        }, 1000))
    }

    return (
        <InputGroup>
            <InputLeftElement children={<SearchIcon color='gray.400' />} m={1} />
            <Input
                size='lg'
                placeholder='Search Ronin address'
                isInvalid
                bg='gray.700'
                errorBorderColor={calculateBorderColor()}
                _placeholder={{ color: 'white' }}
                onChange={searchAddress} />
            <InputRightElement m={1} children={getRightIcon()}/>
        </InputGroup>
    )
}

export default SearchBar;
