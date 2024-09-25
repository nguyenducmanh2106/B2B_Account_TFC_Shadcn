/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InstitutionType } from "./InstitutionType";
import type { PICModel } from "./PICModel";
import type { SchoolType } from "./SchoolType";

export type SchoolModel = {
  id?: string;
  code?: string | null;
  name?: string | null;
  provinceId?: string;
  provinceName?: string | null;
  districtId?: string;
  districtName?: string | null;
  address?: string | null;
  email?: string | null;
  tel?: string | null;
  schoolType?: SchoolType;
  institutionType?: InstitutionType;
  departmentId?: string;
  departmentName?: string | null;
  divisionId?: string;
  divisionName?: string | null;
  piCs?: Array<PICModel> | null;
  parentId?: string | null;
  parentName?: string | null;
  childNodes?: Array<SchoolModel> | null;
  isLeaf?: boolean;
  description?: string | null;
  isAllowCollectionOfFee?: boolean;
  shortName?: string | null;
};

