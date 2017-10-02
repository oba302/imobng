import { OpaqueToken } from '@angular/core';
import { AppConfig } from './model';

export let APP_CONFIG = new OpaqueToken('app.config');

export const DI_CONFIG: AppConfig = {
  generalAPIEndpoint: {
    dashes: 'http://localhost:8080/dashboards/',    
    users: 'http://localhost:8080/users/',
    userLogin: 'http://localhost:8080/login',
    accountActivations: 'http://localhost:8080/account_activations',
  } 
};