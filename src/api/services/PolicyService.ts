/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyModel } from "../models/PolicyModel";
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
export const getPolicy = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/policy`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postPolicy = (
  requestBody?: PolicyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/policy`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param roleId
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getPolicy1 = (roleId: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/policy/getbyrole/${roleId}`,
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getPolicy2 = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/policy/${id}`,
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putPolicy = (
  id: string,
  requestBody?: PolicyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/policy/${id}`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deletePolicy = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/policy/${id}`,
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postPolicy1 = (
  requestBody?: PolicyModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/policy/createorupdate`,
    body: requestBody,
    mediaType: "application/json",
  });
};
