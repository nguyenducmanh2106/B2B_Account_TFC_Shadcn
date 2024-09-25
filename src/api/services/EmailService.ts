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
 * @param id
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getEmail = (id?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/email/get-info-by-id`,
    query: {
      id: id,
    },
  });
};

/**
 * @param email
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getEmail1 = (email?: string): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/email/get-list-by-email`,
    query: {
      email: email,
    },
  });
};