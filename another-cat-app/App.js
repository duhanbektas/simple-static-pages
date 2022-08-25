import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Sir Whiskerson"
                phone="(212) 555-1234"
                email="meow@meow.com"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@meow.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="rightmeow@meow.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT-KING"
                email="whatthemeow@meow.com"
            />
        </div>
    )
}

export default App
