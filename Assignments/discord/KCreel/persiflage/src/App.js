import React, {useState} from 'react';
import './App.css';
import { Grid, Container, List } from 'semantic-ui-react';

const uuidv1 = require('uuid/v1');
//[items, setItem] = useState(
const Server = ({ servers, setCurrentServer }) => {
  return (
    <List relaxed animated>
     {servers.map(server =>(
       <List.Item>
         <span onClick={() =>changeServer(setCurrentServer, server.serverName)}>{server.serverName}</span>
       </List.Item>
     ))}
    </List>
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
      <List relaxed animated>
        <List.Item content="No Channels"/>
      </List>
    )
  }
  return(
    <List relaxed animated>
      {channels.map(channel => (
        <List.Item>
          <span onClick={() => setCurrentChannel({channelName: channel.channelName})}>{channel.channelName}</span>
        </List.Item>
      ))} 
    </List>
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
    <List relaxed animated>
      {messages.map(message =>{
        if(message.channelName=== currentChannel.channelName){
          return(
            <List.Item content={message.username + ': ' + message.body}/>
          )
        }
      })
      }
      

      <input id='messageBox' className='messageBox' placeholder='Message:' onKeyPress={function(event){
        if(currentUser !== ''){
          setMessage(event, currentUser, currentChannel, setMessages, messages)
        }
        else{
          return <alert>Please sign in</alert>
        }
      }}/>
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
      <Container stretched className='container'>
        <Grid rows={2} columns={3} className='grid' >
          <Grid.Row columns={3}>
            <Grid.Column  width={3}>
              <SignIn user={currentUser} setUser={setCurrentUser}/>
            </Grid.Column>

            <Grid.Column width={7}>
              <h1>Persiflage</h1>
            </Grid.Column>

            <Grid.Column width={3}>
              
            </Grid.Column>

            
            
          </Grid.Row>
          <Grid.Row columns={3} stretched className='secondRow'>
            {/* left pane */}
            <Grid.Column className='Server' width={3}>
              <Server servers= {servers} setCurrentServer={setCurrentServer}/>
            </Grid.Column>
            {/* middle body */}
            <Grid.Column className='Messages' width={7}>
              
              <Message currentUser={currentUser} currentChannel={currentChannel} setMessages={setMessages} messages={messages}/>
            </Grid.Column>
            {/* right pane */}
            <Grid.Column className='Channels' width={3}>
              <DisplayChannels currentServer={currentServer} currentChannel={currentChannel} setCurrentChannel={setCurrentChannel} schoolChannels={schoolChannels} gamingChannels={gamingChannels}/>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
