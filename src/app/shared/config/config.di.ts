import { createInjectionToken } from '../utils/di';
import { AppConfigProps } from './config.interface';

export const [injectAppConfig, provideAppConfig] =
  createInjectionToken<AppConfigProps>('App Configuration');
