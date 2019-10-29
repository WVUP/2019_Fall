import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Channels from "./components/Channels"
import Friends from "./components/Friends"


class App extends React.Component {
    
    render(){
        return(
            <div>
                <Header />
                <Channels /> 
                <Content />
                <Friends />
            </div>
        );
    }
}

export default App