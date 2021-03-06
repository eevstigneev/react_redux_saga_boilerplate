import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Global} from '@emotion/react';

import {ConfigProvider} from 'antd';
import ruRu from 'antd/es/locale/ru_RU';

import {Routes} from './entities/Routes';
import injectStyles from './styles/injectStyles';
import {store} from './store/store';

const Root = () => (
  <>
    <Global styles={injectStyles} />
    <ConfigProvider locale={ruRu}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
