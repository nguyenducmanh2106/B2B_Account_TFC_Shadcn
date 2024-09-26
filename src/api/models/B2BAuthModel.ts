/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PICType } from "./PICType";
import type { PolicyModel } from "./PolicyModel";

export type B2BAuthModel = {
  id?: string;
  username?: string | null;
  fullname?: string | null;
  email?: string | null;
  dob?: string;
  phone?: string | null;
  roleId?: string | null;
  roleName?: string | null;
  syncId?: string;
  isDisabled?: boolean;
  permissions?: Array<PolicyModel> | null;
  createdOnDate?: string;
  picType?: PICType;
  objectId?: string | null;
};

