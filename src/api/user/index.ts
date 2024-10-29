import request from '@/utils/http/Axios';

import { Api } from './api';

import type { UserListResultModel } from './model';

import './mock';

/**
 * 获取用户信息
 */
export function getUserList() {
  return request.get<null, UserListResultModel>(Api.getUserList);
}
