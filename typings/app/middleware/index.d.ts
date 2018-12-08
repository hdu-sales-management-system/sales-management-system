// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPermission from '../../../app/middleware/permission';

declare module 'egg' {
  interface IMiddleware {
    permission: typeof ExportPermission;
  }
}
