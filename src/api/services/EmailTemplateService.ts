/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailTemplateModel } from "../models/EmailTemplateModel";
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * Tạo mẫu email
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postEmailTemplate = (
  requestBody?: EmailTemplateModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/emailtemplate`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * Lấy danh sách mẫu email
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getEmailTemplate = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/emailtemplate`,
    query: {
      filter: filter,
    },
  });
};

/**
 * Xóa mẫu email
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const deleteEmailTemplate = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "DELETE",
    path: `/emailtemplate/id`,
    query: {
      id: id,
    },
  });
};

/**
 * Lấy mẫu email theo id
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getEmailTemplate1 = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/emailtemplate/id`,
    query: {
      id: id,
    },
  });
};

/**
 * Cập nhật mẫu email theo id
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putEmailTemplate = (
  id?: string,
  requestBody?: EmailTemplateModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/emailtemplate/id`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getEmailTemplate2 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/emailtemplate/email-template-type`,
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postEmailTemplate1 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/emailtemplate/bootstrap`,
  });
};

