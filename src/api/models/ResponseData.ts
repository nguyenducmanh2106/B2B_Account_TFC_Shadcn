/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Code } from "./Code";

export type ResponseData<T = unknown> = {
  code?: Code;
  data?: T;
  message?: string;
  totalPage?: number;
  totalCount?: number;
  page?: number;
  size?: number;
  [key: string]: any;
};

