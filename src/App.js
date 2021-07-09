import React,{useState, useEffect}  from 'react';
import {Container} from 'react-bootstrap';
import {Button, Form, ListGroup} from 'react-bootstrap';
import Loader  from './components/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {listChat, addText} from './redux/actions/chatActions';

function App() {

  const dispatch = useDispatch();

  const chatList = useSelector(state => state.chatList);
  const {chats, loading} = chatList;

  const addMessage = useSelector(state => state.addMessage);
  const {chatInfo} = addMessage;

  useEffect(()=>{
    dispatch(listChat());
  
  },[dispatch])


  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addText(message, author));
    window.location.reload();
};





  return (
   <main>
     <Container>
     {loading ? <Loader /> : chats.map(chat => (
             <ListGroup as="ul" key={chat._id}>
             <ListGroup.Item as="li">{chat.author} {chat.message} {chat.timestamp}</ListGroup.Item>
            </ListGroup>
          ))} 



<Form onSubmit={submitHandler} >

         
              
<Form.Group controlId="message">
  
  <Form.Control type="text" placeholder="Message" value={message} onChange={e => setMessage( e.target.value)}>

  </Form.Control>
 </Form.Group>

 <Form.Group controlId="author">
  
  <Form.Control type="text" placeholder="Author" value={author} onChange={e => setAuthor( e.target.value)}>

  </Form.Control>
 </Form.Group>


 <Button type="submit" variant="primary">
     Submit

 </Button>
 
 </Form> 
     </Container>
   </main>
  );
}

export default App;
