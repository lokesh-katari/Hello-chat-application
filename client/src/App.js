import io from 'socket.io-client';
import './App.css';
import {useState,useEffect} from 'react';
const socket =io.connect("http://localhost:5000")

function App() {
 const [message, setmessage] = useState('');
 const [chat, setchat] = useState([]);

 const sendChat=(e)=>{
  e.preventDefault();
  socket.emit("chat",{message});
  setmessage("");
 }

 useEffect(() => {
 socket.on("chat",(payload)=>{
  setchat([...chat,payload])
 },[])

 })
 
  return (
    <div className="App">
      <header className="App-header">
      <h1>hello chat application</h1>
      <div className="">
      Messages
      {
        chat.map((payload,index)=>{
          return(<p key={index}>{payload.message}
         </p>)
         })
      }
      </div>
      <form onSubmit={sendChat} >
      <input type="text" onChange={(e)=>{
        setmessage(e.target.value)
        
      }} name="inp" id="inp" 
      value={message}/>
      <button type="submit">submit</button>
      </form>      </header>
    </div>
  );
}

export default App;
