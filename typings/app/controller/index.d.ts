// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCarouse from '../../../app/controller/carouse';
import ExportCart from '../../../app/controller/cart';
import ExportComment from '../../../app/controller/comment';
import ExportDepot from '../../../app/controller/depot';
import ExportHome from '../../../app/controller/home';
import ExportHqpresent from '../../../app/controller/hqpresent';
import ExportImage from '../../../app/controller/Image';
import ExportLogin from '../../../app/controller/login';
import ExportOrder from '../../../app/controller/order';
import ExportPresent from '../../../app/controller/present';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    carouse: ExportCarouse;
    cart: ExportCart;
    comment: ExportComment;
    depot: ExportDepot;
    home: ExportHome;
    hqpresent: ExportHqpresent;
    image: ExportImage;
    login: ExportLogin;
    order: ExportOrder;
    present: ExportPresent;
    user: ExportUser;
  }
}
