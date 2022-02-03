import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevState => ({
                ...prevState,
                randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="container">
                <div className="form">
                    <input 
                        className="form--input" 
                        type="text"
                        placeholder="Top Text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        className="form--input" 
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                    <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
                </div>
                <div className="meme">
                <img src={meme.randomImage} alt="meme" className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                
            
            </div>
        </main>
    )
}