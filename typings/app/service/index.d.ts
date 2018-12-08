// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCart from '../../../app/service/Cart';
import ExportDepot from '../../../app/service/Depot';
import ExportLogin from '../../../app/service/Login';
import ExportPresent from '../../../app/service/Present';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/User';

declare module 'egg' {
  interface IService {
    cart: ExportCart;
    depot: ExportDepot;
    login: ExportLogin;
    present: ExportPresent;
    test: ExportTest;
    user: ExportUser;
  }
}
