import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,OverlayTrigger,Popover } from 'react-bootstrap';

const platform = window.navigator.platform;
var trg="focus";
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
      <Button variant="outline-success" style={{width: '4rem', margin:1 }}>1</Button>
    </Popover.Body>
  </Popover>
);
function App() {
  if(platform ==="iPad" | platform === "MacIntel") {trg="hover";} 
  else {trg="focus";}  
  return (
    <div className="App">
      
       
        <p>
          Hello  {platform} !
        </p>
        
     <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
        <Button variant="outline-success" style={{width: '15rem', margin:1 }}>Click me to see (focus)</Button>
     </OverlayTrigger>
       <br/>
     <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
        <Button variant="outline-success" style={{width: '15rem', margin:1 }}>Click me to see(hover)</Button>
     </OverlayTrigger><br/>
     <OverlayTrigger trigger={trg} placement="right" overlay={popover}>
        <Button variant="outline-success" style={{width: '15rem', margin:1 }}>Click me to see General Solution</Button>
     </OverlayTrigger>
    </div>
  );
}

export default App;
