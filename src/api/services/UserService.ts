/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { UserChangePassword } from "../models/UserChangePassword";
import type { UserModel } from "../models/UserModel";
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
export const getUser = (
  name?: string,
  pageIndex: number = 1,
  pageSize: number = 10
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/user`,
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
export const postUser = (
  requestBody?: UserModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/user`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getUser1 = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/user/${id}`,
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putUser = (
  id: string,
  requestBody?: UserModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/user/${id}`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteUser = (id: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/user/${id}`,
  });
};

/**
 * @param id
 * @param status
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putUser1 = (
  id: string,
  status: boolean
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/user/togglestatus/${id}/${status}`,
  });
};

/**
 * @param userId
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putUser2 = (
  userId: string,
  requestBody?: UserModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/user/asignrole/${userId}`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteUser1 = (
  requestBody?: Array<string>
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/user/deletemany`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getUser2 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/user/me`,
  });
};

/**
 * @param syncId
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getUser3 = (syncId: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/user/me/${syncId}`,
  });
};

/**
 * @param userId
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putUser3 = (
  userId: string,
  requestBody?: UserChangePassword
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/user/changepassword/${userId}`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param email
 * @param url
 * @returns boolean Success
 * @throws ApiError
 */
export const getUser4 = (
  email?: string,
  url?: string
): CancelablePromise<boolean> => {
  return __request({
    method: "GET",
    path: `/user/insertattribute`,
    query: {
      email: email,
      url: url,
    },
  });
};

/**
 * @param email
 * @returns boolean Success
 * @throws ApiError
 */
export const getUser5 = (email?: string): CancelablePromise<boolean> => {
  return __request({
    method: "GET",
    path: `/user/deleteattribute`,
    query: {
      email: email,
    },
  });
};

/**
 * @param email
 * @returns boolean Success
 * @throws ApiError
 */
export const getUser6 = (email?: string): CancelablePromise<boolean> => {
  return __request({
    method: "GET",
    path: `/user/selectattribute`,
    query: {
      email: email,
    },
  });
};
