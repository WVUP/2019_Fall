import React from "react"

const styles = {
    backgroundColor: "#6C6C6C",
    fontFamily: "Helvetica",
    color: "#FFFFFF",
    fontSize: 50,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    border: "solid"
}

class Header extends React.Component{
    render(){
        return(
            <header style={styles}>"Discord"</header>
        )
    }  
}

export default Header