import type { GlobEnvConfig, GlobConfig } from '#/config';

export function getAppEnvConfig(): GlobConfig {
  const ENV = import.meta.env as unknown as GlobEnvConfig;

  const { VITE_API_DOMAIN, VITE_API_URL } = ENV;

  const env: Readonly<GlobConfig> = {
    apiDomain: VITE_API_DOMAIN,
    apiUrl: VITE_API_URL,
  };

  return env as Readonly<GlobConfig>;
}

/**
 * 是否开启mock
 */
export function isUseMock(): boolean {
  return import.meta.env.VITE_USE_MOCK === 'true';
}

/**
 * 环境是否开启vConsole
 */
export function isUseVconsole(): boolean {
  return import.meta.env.VITE_ENV !== 'prod';
}

/**
 * 是否为开发环境
 */
export function isDev(): boolean {
  return import.meta.env.VITE_ENV === 'dev';
}

/**
 * 是否为生产环境
 */
export function isProd(): boolean {
  return import.meta.env.VITE_ENV === 'prod';
}
