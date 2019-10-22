import React, {useState} from 'react';
import './App.css';
import { Grid, Container, List } from 'semantic-ui-react';

const uuidv1 = require('uuid/v1');
//[items, setItem] = useState(
const Server = ({ servers, setCurrentServer }) => {
  return (
    <Grid.Column>
     {servers.map(server =>(
       <Grid.Row>
         <span onClick={() =>changeServer(setCurrentServer, server.serverName)}>{server.serverName}</span>
       </Grid.Row>
     ))}
    </Grid.Column>
  )
}
function changeServer(setCurrentServer, newServerName){
  setCurrentServer({serverName: newServerName});
}
const SignIn =({user, setUser}) =>{
  if(user == '') return (
    <input id='userNameBox'placeholder='Username:' onKeyPress={function(event){changeUser(event, user, setUser)}}/>
  )
  //2.0   if(event.which==="13"){setUser(this.value)}
  //onChange={(event)=>{changeUser(event, setCurrentUser)}}
  return (<div>Welcome, {user}</div>)
  
}
function changeUser(event, user, setUser){
  console.log("The keycode is:"+event.which);
  if(event.which=="13") {
    var trash = document.getElementById('userNameBox');
    console.log(trash);
    setUser(trash.value);
    trash.value ='';
    console.log(user);
  }
}
const Channel =({currentChannel, setCurrentChannel, channels}) =>{
  if(!channels){
    return(
      <Grid.Column>
        <Grid.Row>
          No channels
        </Grid.Row>
      </Grid.Column>
    )
  }
  return(
    <Grid.Column>
      {channels.map(channel => (
        <Grid.Row>
          <span onClick={() => setCurrentChannel({channelName: channel.channelName})}>{channel.channelName}</span>
        </Grid.Row>
      ))} 
    </Grid.Column>
  )
}
function setMessage(event, currentUser, currentChannel, setMessages, messages){
  if(event.which=="13") {
    var input = document.getElementById('messageBox').value;
    setMessages([...messages, {body: input, username: currentUser, channelName: currentChannel.channelName}]);
  }
}
const Message =( {currentUser, currentChannel, setMessages, messages} ) =>{
  if(!messages){
    return(
      <List>
        <List.Item content='Lonely :('/>
        <input id='messageBox' placeholder='Message:' onKeyPress={function(event){setMessage(event, currentUser, currentChannel, setMessages, messages)}}/>
      </List>
    )
  }
  console.log(messages)
  return(
    <List>
      {messages.map(message =>{
        if(message.channelName=== currentChannel.channelName){
          return(
            <List.Item content={message.username + ': ' + message.body}/>
          )
        }
      })
      }
      

      <input id='messageBox' placeholder='Message:' onKeyPress={function(event){setMessage(event, currentUser, currentChannel, setMessages, messages)}}/>
    </List>
  )
}
const DisplayChannels=({currentServer, currentChannel, setCurrentChannel, schoolChannels, gamingChannels}) => {
  if(currentServer.serverName === 'School'){
    return(
    <Channel currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} channels={schoolChannels}/>)
  }
  if(currentServer.serverName === 'Gaming'){
    return(
    <Channel currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} channels={gamingChannels}/>)
  }
  return(
    <div>
      <Channel currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} channels={schoolChannels}/>
      <Channel currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} channels={gamingChannels}/>
    </div>
  )
}
function App() {
  

  const [currentUser, setCurrentUser] = useState('');
  const [currentServer, setCurrentServer] = useState({serverName: 'School'});
  const [currentChannel, setCurrentChannel] = useState({channelName:'CS329'});
  const [servers, setServers] = useState([{serverName:'School'}, {serverName:'Gaming'}]);
  const [schoolChannels, setSchoolChannels] = useState([{channelName:'CS329'}]);
  const [gamingChannels, setGamingChannels] = useState([{channelName:'Wow Retail'}, {channelName:'Wow Classic'}]);
  const [messages, setMessages] = useState([{body:'First Message 329 PogChamp', username:'spartan_drake', channelName:'CS329'}, {body:'Second Message 329 WeirdChamp', username:'spartan_drake', channelName:'CS329'}, {body:'First Message wow PogChamp', username:'spartan_drake', channelName:'Wow Retail'}]);
  //const [servers, setServers] = useState([{serverName:'School', channels: [{channelName: 'CS329', channelMessages:[{body:'First Message PogChamp', username:'spartan_drake'}]}]}, {serverName:'Gaming', channels: [{channelName: 'LoL', channelMessages:[{body:'First Message PogChamp', username:'spartan_drake'}]}, {channelName: 'WoW', channelMessages:[{body:'First Message PogChamp', username:'spartan_drake'}]}]}]);
  
  return (
    <div className="App">
      <Container>
        <Grid rows={2} columns={3}>
          <Grid.Row columns={3}>
            <Grid.Column>
              <SignIn user={currentUser} setUser={setCurrentUser}/>
            </Grid.Column>

            <Grid.Column>
              <h1>Persiflage</h1>
            </Grid.Column>

            <Grid.Column>
              
            </Grid.Column>

            
            
          </Grid.Row>
          <Grid.Row columns={3}>
            {/* left pane */}
            <Grid.Column className='Server' width={1}>
              <Server servers= {servers} setCurrentServer={setCurrentServer}/>
            </Grid.Column>
            {/* middle body */}
            <Grid.Column className='Messages' width={7}>
              
              <Message currentUser={currentUser} currentChannel={currentChannel} setMessages={setMessages} messages={messages}/>
            </Grid.Column>
            {/* right pane */}
            <Grid.Column className='Channels' width={1}>
              <DisplayChannels currentServer={currentServer} currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} schoolChannels={schoolChannels} gamingChannels={gamingChannels}/>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
