import React from 'react';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import Client from './Client.jsx';
import {serviceProcess} from "../mockService/mockServiceController";
// import useService from "./useService";

jest.mock("../mockService/mockServiceController")

const useService = jest.requireActual("./useService");
const useServiceSpy = jest.spyOn(useService, "default");

const setShowLoading = jest.fn();
const setData = jest.fn();


const renderComponent = () => render(<Client setShowLoading={setShowLoading} setData={setData}/>);

describe('ClientManagement', () => {
    
    beforeEach(() => {
        serviceProcess.mockReturnValue("Success");
    })
    afterEach(() => {
        jest.resetAllMocks();
    })

    it('should render components ClientForm and ClientList', async() => {
        // Given -> Preconditions to my test if any (none in this case)
        // When -> Action of the test (the render in this case)
        renderComponent();
        // Then --> Assertions
        screen.debug(undefined, 300000);
        const button = screen.getByRole('button', {name: "Click me to call the service"});
        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(useServiceSpy).toHaveBeenCalledWith(setShowLoading, setData)
        // When -> Sometimes you'll find another interaction in the middle of the test
        await userEvent.click(button);
        // Then -> Followed by some additional assertions
        expect(setData).toHaveBeenCalledWith('Success')
    });
});
