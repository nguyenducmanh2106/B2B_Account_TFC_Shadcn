/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegistrationPaymentModel } from "../models/RegistrationPaymentModel";
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
export const getRegistrationPayment = (
  id?: string
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/registrationpayment`,
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
export const postRegistrationPayment = (
  requestBody?: RegistrationPaymentModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationpayment`,
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param id
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const putRegistrationPayment = (
  id?: string,
  requestBody?: RegistrationPaymentModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "PUT",
    path: `/registrationpayment`,
    query: {
      id: id,
    },
    body: requestBody,
    mediaType: "application/json",
  });
};

/**
 * @param formData
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationPayment1 = (formData?: {
  IsOverwrite?: boolean;
  File?: Blob;
}): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationpayment/import`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

/**
 * @param requestBody
 * @returns ResponseData Success
 * @throws ApiError
 */
export const postRegistrationPayment2 = (
  requestBody?: RegistrationPaymentModel
): CancelablePromise<ResponseData> => {
  return __request({
    method: "POST",
    path: `/registrationpayment/createorupdatemany`,
    body: requestBody,
    mediaType: "application/json",
  });
};
