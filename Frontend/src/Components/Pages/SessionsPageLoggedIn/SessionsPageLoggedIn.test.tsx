import { render, screen } from "@testing-library/react"
import { SessionPage } from "./SessionPage"
import { Time } from "../Time/Time"
import { SessionInfo } from "../SessionInfo/SessionInfo"
import { Schedule } from "../Schedule/Schedule"
import { NavbarsGeneralAttendee } from "../../NavbarGeneric/Navbar"

test('SessionsPage renders correctly', () => {
    render(<SessionPageLoggedIn></SessionPageLoggedIn>)

    const text = screen.getByText("Sessions")

    const time = screen.getByRole(Time, { name: /Times/i})
    const sessionInfo = screen.getByRole(SessionInfo, { name: /Info/i})
    const sessionOne = screen.getByRole(Schedule, { name: /SessionOne/i})
    const sessionTwo = screen.getByRole(Schedule, { name: /SessionTwo/i})
    const sessionThree = screen.getByRole(Schedule, { name: /SessionThree/i})
    
    //Navbar test
    const navBar = screen.getByRole(NavbarsGeneralAttendee) 
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveStyle('navstyle: sessions')

    expect(time).toBeInTheDocument()
    expect(sessionInfo).toBeInTheDocument()
    expect(sessionOne).toBeInTheDocument()
    expect(sessionTwo).toBeInTheDocument()
    expect(sessionThree).toBeInTheDocument()

    expect(text).toBeInTheDocument()
})