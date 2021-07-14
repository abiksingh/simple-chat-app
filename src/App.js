import React,{useState, useEffect}  from 'react';
import {Container} from 'react-bootstrap';
import {Button, Form, Row, Col, Card} from 'react-bootstrap';
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

     <Container>
          <main>
     {loading ? <Loader /> : chats.map(chat => (
           
             <Card style={{display: "flex", maxWidth: "50%", marginLeft: "20px", marginTop: "20px"}} key={chat._id}>
            <Card.Body>
              <Card.Title> {chat.author}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{(new Date(parseInt(chat.timestamp)).getDate()) + '/' + (new Date(parseInt(chat.timestamp)).getMonth() + 1 + '/') + (new Date(parseInt(chat.timestamp)).getFullYear()) }</Card.Subtitle>
              <Card.Text>
               {chat.message}
              </Card.Text>
            </Card.Body>
          </Card>
         
           
          ))} 

          </main>
          <Form onSubmit={submitHandler} >
            <br/>
            <Row>
            <Col>
            <Form.Control  type="text" placeholder="Message" value={message} onChange={e => setMessage( e.target.value)}>
            </Form.Control>
            </Col>
              <Col>
            <Form.Control type="text" placeholder="Author" value={author} onChange={e => setAuthor( e.target.value)}>
            </Form.Control>
            </Col>
            </Row>
            <br />
          <Button  type="submit" variant="primary" size="md" block>
              Send
            </Button>
            </Form> 
              </Container>
            
            );
}

export default App;
