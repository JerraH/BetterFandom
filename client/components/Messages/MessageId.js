import React from 'react';


const Message = (props) => (
  <div className="card message">
    <div className="card-body">
    {props.message}
    </div>
  </div>
);

export default Message;
