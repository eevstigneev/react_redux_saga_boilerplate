import {LocalStorage} from './localStorage';

/* eslint-disable */
  global['localStorage'] = new LocalStorage(jest);
  global['sessionStorage'] = new LocalStorage(jest);
/* eslint-enable */
