import axios from 'axios';
import { getAppEnvConfig, isUseMock } from '@/utils/env';
import type { AxiosResponse } from 'axios';
import { ContentTypeEnum } from '@/enums/httpEnum';

const baseConfig = {
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
};

const instance = axios.create({
  ...baseConfig,
  baseURL: isUseMock() ? '/' : getAppEnvConfig().apiUrl,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 额外配置处理
    // console.log(config.params)
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    // console.log(response)
    const { data } = response;
    if (data) {
      // 返回数据格式
      const { code, data: innerData } = data;
      if (code !== 0) {
        return Promise.reject(data);
      }
      return innerData;
    }
    return Promise.reject(response);
  },
  (error) => Promise.reject(error),
);

export default instance;
