import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    // Arrange
    render(<CheckoutForm/>);
    // Act
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    userEvent.type(firstNameInput, 'Sans');
    userEvent.type(lastNameInput, 'Undertale');
    userEvent.type(addressInput, 'Log Cabin');
    userEvent.type(cityInput, 'Snowdin');
    userEvent.type(stateInput, 'Underground');
    userEvent.type(zipInput, '42069');

    const submitButt = screen.getByRole('button');
    userEvent.click(submitButt);
    // Assert
    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toHaveTextContent('You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Sans UndertaleLog CabinSnowdin, Underground 42069');
});
