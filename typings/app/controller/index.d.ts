// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCarouse from '../../../app/controller/carouse';
import ExportCart from '../../../app/controller/cart';
import ExportHome from '../../../app/controller/home';
import ExportHqpresent from '../../../app/controller/hqpresent';
import ExportLogin from '../../../app/controller/login';
import ExportPresent from '../../../app/controller/present';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    carouse: ExportCarouse;
    cart: ExportCart;
    home: ExportHome;
    hqpresent: ExportHqpresent;
    login: ExportLogin;
    present: ExportPresent;
    user: ExportUser;
  }
}
