import MockAdapter from 'axios-mock-adapter';

import { isUseMock } from '@/utils/env';

import axios from './Axios';

const mock = new MockAdapter(axios);

// 是否开启mock
if (!isUseMock()) {
  mock.restore();
}

export default mock;
