// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportCarouse from '../../../app/model/carouse';
import ExportCart from '../../../app/model/cart';
import ExportCategory from '../../../app/model/category';
import ExportComment from '../../../app/model/comment';
import ExportDealer from '../../../app/model/dealer';
import ExportDealerOrder from '../../../app/model/dealer_order';
import ExportDepot from '../../../app/model/depot';
import ExportDepotItem from '../../../app/model/depot_item';
import ExportEmploee from '../../../app/model/emploee';
import ExportImage from '../../../app/model/image';
import ExportLog from '../../../app/model/log';
import ExportMessage from '../../../app/model/message';
import ExportOrder from '../../../app/model/order';
import ExportOrderItem from '../../../app/model/order_item';
import ExportOrderItem2 from '../../../app/model/order_item2';
import ExportPresent from '../../../app/model/present';
import ExportPresentTag from '../../../app/model/present_tag';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Article: ReturnType<typeof ExportArticle>;
    Carouse: ReturnType<typeof ExportCarouse>;
    Cart: ReturnType<typeof ExportCart>;
    Category: ReturnType<typeof ExportCategory>;
    Comment: ReturnType<typeof ExportComment>;
    Dealer: ReturnType<typeof ExportDealer>;
    DealerOrder: ReturnType<typeof ExportDealerOrder>;
    Depot: ReturnType<typeof ExportDepot>;
    DepotItem: ReturnType<typeof ExportDepotItem>;
    Emploee: ReturnType<typeof ExportEmploee>;
    Image: ReturnType<typeof ExportImage>;
    Log: ReturnType<typeof ExportLog>;
    Message: ReturnType<typeof ExportMessage>;
    Order: ReturnType<typeof ExportOrder>;
    OrderItem: ReturnType<typeof ExportOrderItem>;
    OrderItem2: ReturnType<typeof ExportOrderItem2>;
    Present: ReturnType<typeof ExportPresent>;
    PresentTag: ReturnType<typeof ExportPresentTag>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
  }
}
