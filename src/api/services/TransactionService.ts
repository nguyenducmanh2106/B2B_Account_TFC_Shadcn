/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegistrationRound } from "../models/RegistrationRound";
import type { ResponseData } from "../models/ResponseData";
import type { TransactionUpdateModel } from "../models/TransactionUpdateModel";
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
export const getTransaction = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/transaction`,
    query: {
      id: id,
    },
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putTransaction = (
  requestBody?: TransactionUpdateModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/transaction`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param registrationId
 * @param round
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postTransaction = (
  registrationId?: string,
  round?: RegistrationRound
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/transaction`,
    query: {
      registrationId: registrationId,
      round: round,
    },
  });
};

/**
 * @param transactionNo
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getTransaction1 = (
  transactionNo?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/transaction/gettransactionresult`,
    query: {
      transactionNo: transactionNo,
    },
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getTransaction2 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/transaction/history`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param transactionId
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getTransaction3 = (
  transactionId: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/transaction/history/${transactionId}`,
  });
};

/**
 * @param filter
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getTransaction4 = (
  filter: string = "{}"
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/transaction/history/export`,
    query: {
      filter: filter,
    },
  });
};

/**
 * @param second
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getTransaction5 = (
  second: number = 10
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/transaction/test`,
    query: {
      second: second,
    },
  });
};

/**
 * @param refId
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getTransaction6 = (
  refId?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/transaction/gettransactionresultbyrefid`,
    query: {
      refId: refId,
    },
  });
};
