// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/service/Login';
import ExportPresent from '../../../app/service/Present';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    login: ExportLogin;
    present: ExportPresent;
    test: ExportTest;
  }
}
