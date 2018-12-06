// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCarouse from '../../../app/controller/carouse';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportPresent from '../../../app/controller/present';

declare module 'egg' {
  interface IController {
    carouse: ExportCarouse;
    home: ExportHome;
    login: ExportLogin;
    present: ExportPresent;
  }
}
