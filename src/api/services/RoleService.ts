/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { RoleModel } from "../models/RoleModel";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param name
 * @param pageIndex
 * @param pageSize
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRole = (
  name?: string,
  pageIndex: number = 1,
  pageSize: number = 10
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/role`,
    query: {
      name: name,
      pageIndex: pageIndex,
      pageSize: pageSize,
    },
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRole = (
  requestBody?: RoleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/role`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRole1 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/role/getvaluetype`,
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRole2 = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/role/${id}`,
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putRole = (
  id: string,
  requestBody?: RoleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/role/${id}`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteRole = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/role/${id}`,
  });
};

/**
 * @param topik
 * @param isShow
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getRole3 = (
  topik?: boolean,
  isShow?: boolean
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/role/accessdata/treeview`,
    query: {
      topik: topik,
      isShow: isShow,
    },
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putRole1 = (
  id: string,
  requestBody?: RoleModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/role/assignaccessdata/${id}`,
    body: requestBody,
    mediaType: "application/json",
  });
};
