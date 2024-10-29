import mock from '@/utils/http/mock';

import { Api } from './api';

mock.onGet(Api.getUserList).reply(200, {
  code: 0,
  data: [],
});
