// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportCarouse from '../../../app/model/carouse';
import ExportComment from '../../../app/model/comment';
import ExportDealer from '../../../app/model/dealer';
import ExportDealerOrder from '../../../app/model/dealer_order';
import ExportDepot from '../../../app/model/depot';
import ExportEmploee from '../../../app/model/emploee';
import ExportImage from '../../../app/model/image';
import ExportMessage from '../../../app/model/message';
import ExportOrder from '../../../app/model/order';
import ExportOrderItem from '../../../app/model/order_item';
import ExportPresent from '../../../app/model/present';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Article: ReturnType<typeof ExportArticle>;
    Carouse: ReturnType<typeof ExportCarouse>;
    Comment: ReturnType<typeof ExportComment>;
    Dealer: ReturnType<typeof ExportDealer>;
    DealerOrder: ReturnType<typeof ExportDealerOrder>;
    Depot: ReturnType<typeof ExportDepot>;
    Emploee: ReturnType<typeof ExportEmploee>;
    Image: ReturnType<typeof ExportImage>;
    Message: ReturnType<typeof ExportMessage>;
    Order: ReturnType<typeof ExportOrder>;
    OrderItem: ReturnType<typeof ExportOrderItem>;
    Present: ReturnType<typeof ExportPresent>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
  }
}
