import {useContext} from 'react'
import {Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {CheckIcon, SearchIcon} from "@chakra-ui/icons";
import {RoninContext} from "../../services/roninContext";

const SearchBar = () => {
    const {setAddress} = useContext(RoninContext)

    return (
        <InputGroup>
            <InputLeftElement children={<SearchIcon color='gray.400' />} m={1} />
            <Input
                size='lg'
                placeholder='Search Ronin address'
                isInvalid
                bg='gray.700'
                errorBorderColor='green.500'
                _placeholder={{ color: 'white' }}
                onChange={(e) => {setAddress(e.target.value)}} />
            <InputRightElement children={<CheckIcon color='green.500' />} m={1} />
        </InputGroup>
    )
}

export default SearchBar;
