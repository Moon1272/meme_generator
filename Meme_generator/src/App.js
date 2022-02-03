import Header from "./components/Header"
import Meme from "./components/Meme"
import React from "react"

export default function App() {
    const [show, setShow] = React.useState(false)

    function toggle() {
        setShow(prevState => !prevState)
    }

    return (
        <>
            <Header />
            <Meme />
        </>
        
    )
}