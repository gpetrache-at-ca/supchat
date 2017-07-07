import React from 'react';
import ReactDOM from 'react-dom';

let myWS = window.WS.connect(window._WS_URI);

ReactDOM.render(
    <div>CONTENT</div>,
    document.getElementById('content')
);
