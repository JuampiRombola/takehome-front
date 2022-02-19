import {act} from '@testing-library/react';
import StatsGrid from '../../components/stats-grid/presentational';
import ReactDOM from "react-dom";
import {RoninContext} from "../../services/roninContext";

describe("StatsGrid", () => {
    let container;

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
                    <StatsGrid/>
                </RoninContext.Provider>
            ), container);
        });
    }

    test('render stats grid for the first time', () => {
        const mockContext = { data: {}}
        mountSearchBar(mockContext);

        const statsGrid = container.firstChild;
        const profileType = statsGrid.firstChild;

        expect(statsGrid).toBeInTheDocument();
        expect(profileType).toBeInTheDocument();
        expect(profileType).toHaveTextContent('Investor or scholar profile?')
    });

    test('investor profile', () => {
        const mockContext = { data: { isInvestor: true }}
        mountSearchBar(mockContext);

        const statsGrid = container.firstChild;
        const profileType = statsGrid.firstChild;

        expect(profileType).toHaveTextContent('Investor profile')
    });

    test('scholar profile', () => {
        const mockContext = { data: { isScholar: true }}
        mountSearchBar(mockContext);

        const statsGrid = container.firstChild;
        const profileType = statsGrid.firstChild;

        expect(profileType).toHaveTextContent('Scholar profile')
    });
})
