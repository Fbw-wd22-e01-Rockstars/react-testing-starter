import { ArrowRightOutlined } from "@material-ui/icons"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import  event  from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"




test("if an amount and note is entered, the pay button becomes enabled", async () => {
    render(<TransactionCreateStepTwo sender={{id: "5"}} receiver={{id: "5"}}/>)
    expect( await screen.findByRole("button", {name: /pay/i})).toBeDisabled();
    
    //we need to mimic the user event and we need to target it by the name .. we pass a number and then for the note, we pass dinner.

        userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
        userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

    
    expect( await screen.findByRole("button", {name: /pay/i})).toBeEnabled();
    
})

// on the tests we have a pattern that consists of three steps:
//1. Arrange ( where we render the component)
//2. Act (user events, typing, clicking... things like that)
//3. Assert ( where you make your assertions)