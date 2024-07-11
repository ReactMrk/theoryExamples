import React from 'react';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import Client from './Client.jsx';
import {serviceProcess} from "../mockService/mockServiceController";
// import useService from "./useService";

const useService = jest.requireActual("./useService");
const useServiceSpy = jest.spyOn(useService, "default");
jest.mock("../mockService/mockServiceController")

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
        renderComponent();
        screen.debug(undefined, 300000);
        const button = screen.getByRole('button', {name: "Click me to call the service"});
        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(useServiceSpy).toHaveBeenCalledWith(setShowLoading, setData)
        await userEvent.click(button);
        expect(setData).toHaveBeenCalledWith('Success')
    });
});
