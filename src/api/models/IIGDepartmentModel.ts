/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IIGDepartmentModel = {
  id?: string;
  code?: string | null;
  name?: string | null;
  description?: string | null;
  parentId?: string | null;
  tel?: string | null;
  email?: string | null;
  children?: Array<IIGDepartmentModel> | null;
};

