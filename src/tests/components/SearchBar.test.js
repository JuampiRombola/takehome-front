import {act} from '@testing-library/react';
import SearchBar from '../../components/search-bar/presentational';
import ReactDOM from "react-dom";
import {RoninContext} from "../../services/roninContext";

describe("SearchBar", () => {
    let container;

    const mockContext = {
        address: '',
        setAddress: () => {},
        loading: false,
        setLoading: () => {},
        data: {}
    }

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    const mountSearchBar = (mockContext) => {
        act(() => {
            ReactDOM.render((
                <RoninContext.Provider value={mockContext}>
                    <SearchBar/>
                </RoninContext.Provider>
            ), container);
        });
    }

    test('render search bar for the first time', () => {
        mountSearchBar(mockContext);

        const searchBar = container.firstChild;
        const rightElement = searchBar.lastChild;
        const rightIcon = rightElement.firstChild;

        expect(searchBar).toBeInTheDocument();
        expect(rightElement).toBeInTheDocument();
        expect(rightIcon).toBeNull()
    });

    test('loading search bar', () => {
        const context = {...mockContext, loading: true}
        mountSearchBar(context);

        const searchBar = container.firstChild;
        const rightIcon = searchBar.lastChild.firstChild;

        expect(rightIcon.getAttribute('role')).toBe('progressbar')
    });

    test('wrong address', () => {
        const context = { ...mockContext, address: 'test', data: { isValidAddress: false } }

        mountSearchBar(context);

        const searchBar = container.firstChild;
        const rightIcon = searchBar.lastChild.firstChild;

        expect(rightIcon.getAttribute('class')).toBe('chakra-icon css-15ka5pw')
    });

    test('accepted address', () => {
        const context = { ...mockContext, address: 'test', data: { isValidAddress: true } }

        mountSearchBar(context);

        const searchBar = container.firstChild;
        const rightIcon = searchBar.lastChild.firstChild;

        expect(rightIcon.getAttribute('class')).toBe('chakra-icon css-rh0nee')
    });
})
