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
 * @param departmentId
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getSchoolPermission = (
  departmentId?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/schoolpermission`,
    query: {
      departmentId: departmentId,
    },
  });
};

/**
 * @param departmentId
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putSchoolPermission = (
  departmentId?: string,
  requestBody?: Array<Array<string>>
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/schoolpermission`,
    query: {
      departmentId: departmentId,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};
