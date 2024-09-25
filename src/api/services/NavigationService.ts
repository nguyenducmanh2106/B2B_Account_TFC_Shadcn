/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NavigationModel } from "../models/NavigationModel";
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
export const getNavigation = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/navigation`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postNavigation = (
  requestBody?: NavigationModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/navigation`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getNavigation1 = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/navigation/${id}`,
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putNavigation = (
  id: string,
  requestBody?: NavigationModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/navigation/${id}`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteNavigation = (
  id: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/navigation/${id}`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteNavigation1 = (
  requestBody?: Array<string>
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/navigation/deletemany`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getNavigation2 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/navigation/getnavigationbypermision`,
  });
};
