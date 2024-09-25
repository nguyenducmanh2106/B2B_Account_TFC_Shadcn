/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepartmentModel } from "../models/DepartmentModel";
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
export const postDepartment = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/department/bootstrap`,
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getDepartment = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/department`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getDepartment1 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/department/id`,
    query: {
      id: id,
    },
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putDepartment = (
  id?: string,
  requestBody?: DepartmentModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/department/id`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postDepartment1 = (
  requestBody?: DepartmentModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/department/create`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteDepartment = (
  id: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/department/delete/${id}`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteDepartment1 = (
  requestBody?: Array<string>
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/department/multidelete`,
    body: requestBody,
    mediaType: "application/json",
  });
};