/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseData } from "../models/ResponseData";
import type { TemplateType } from "../models/TemplateType";
import type { CancelablePromise } from "../core/CancelablePromise";
import {
  request as __request,
  useRequest,
} from "../core/request";

/**
 * @param type
 * @returns ResponseData Success
 * @throws ApiError
 */
export const getFile = (
  type?: TemplateType
): CancelablePromise<ResponseData> => {
  return __request({
    method: "GET",
    path: `/file/template`,
    query: {
      type: type,
    },
  });
};

/**
 * @param formData
 * @returns any Success
 * @throws ApiError
 */
export const postFile = (formData?: {
  files?: Array<Blob>;
}): CancelablePromise<any> => {
  return __request({
    method: "POST",
    path: `/file/uploadfiles`,
    formData: formData,
    mediaType: "multipart/form-data",
  });
};

