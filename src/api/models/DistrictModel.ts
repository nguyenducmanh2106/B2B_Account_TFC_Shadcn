/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WardModel } from "./WardModel";

export type DistrictModel = {
  id?: string;
  code?: string | null;
  name?: string | null;
  provinceId?: string;
  wards?: Array<WardModel> | null;
  shortName?: string | null;
};

