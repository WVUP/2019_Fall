import React from "react"

const styles = {
    backgroundColor: "#484848",
    paddingTop: 10,
    paddingBottom:10,
    fontFamily: "Helvetica",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    width: "25%",
    height: 1000,
    float: "left",

}

class Friends extends React.Component{
    render(){
        return(
            <div style = {styles}>
                <p>These are my friends</p>
            </div>
        )
    }
}

export default Friends