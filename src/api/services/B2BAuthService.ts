/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { B2BLoginModel } from "../models/B2BLoginModel";
import type { ResponseData } from "../models/ResponseData";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @returns boolean Success
 * @throws ApiError
 */
export const getB2BAuth = (): CancelablePromise<boolean> => {
  return __request({
    method: "GET",
    path: `/b2bauth`,
  });
};

/**
 * @param code
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getB2BAuth1 = (code?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/b2bauth/gettoken`,
    query: {
      code: code,
    },
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postB2BAuth = (
  requestBody?: B2BLoginModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/b2bauth/login`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getB2BAuth2 = (): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/b2bauth/me`,
  });
};
