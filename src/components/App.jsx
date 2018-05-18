import React from 'react';
import { Button } from 'react-bootstrap';

const App = ({ message = 'Hello React!' }) => (
   
    <div className="btn-group">
    <Button bsStyle='primary' bsSize='large'>{message}</Button>
    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Action <span className="caret"></span>
    </button>
      <ul className="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
    
  )
  
  App.propTypes = {
    
  }
  
  export default App