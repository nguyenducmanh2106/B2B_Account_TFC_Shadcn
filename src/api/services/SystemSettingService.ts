/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getSystemSetting = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/systemsetting`,
  });
};

