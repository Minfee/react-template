/*
 * @Author: Minfee Li
 * @Date: 2021-10-25 11:11:57
 * @LastEditTime: 2021-10-25 14:03:16
 * @LastEditors: Minfee Li
 * @Description:
 * @FilePath: /react-template/src/index.tsx
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root')
);
