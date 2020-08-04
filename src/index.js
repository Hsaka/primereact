import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Button } from '../src/components/button/Button';

ReactDOM.render(
    <HashRouter>
        <Button label="Click" />
    </HashRouter>,
    document.getElementById('root')
);