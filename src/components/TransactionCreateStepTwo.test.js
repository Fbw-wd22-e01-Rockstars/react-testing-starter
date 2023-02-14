import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import  event  from "@testing-library/user-event"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"

test("on initial render, the pay button is disabled", async () => {
    render(<TransactionCreateStepTwo sender={{id: "5"}} receiver={{id: "5"}}/>)

    expect( await screen.findByRole("button", {name: /pay/i})).toBeDisabled();
    //the name we see in the console the name for it is "pay"
    //formik causes a bug because as you render the componen, the pay button goes from enabled to disabled

    //when using async await you need to use findbyRole instead of getByRole
    
})


test("if an amount and note is entered, the pay button becomes enabled", async () => {
    render(<TransactionCreateStepTwo sender={{id: "5"}} receiver={{id: "5"}}/>)
    
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

    screen.getByRole("")

    
})