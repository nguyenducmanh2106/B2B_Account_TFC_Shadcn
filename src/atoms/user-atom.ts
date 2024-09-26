import { Code, PICType, type PolicyModel } from "@/api";
import type { B2BAuthModel } from "@/api/models/B2BAuthModel";
import { getB2BAuth2 } from "@/api/services/B2BAuthService";
import { atom } from "jotai";

export interface CurrentUser {
    id?: string;
    syncId?: string | null,
    username?: string | null;
    fullname?: string | null;
    avatar: string;
    roles: string[];
    permissions: PolicyModel[];
    iigDepartmentId?: string | null;
    picType?: PICType;
    objectId?: string | null;
}
export const initialState: CurrentUser = {
    id: '',
    syncId: '',
    username: '',
    fullname: '',
    avatar: '',
    roles: [],
    permissions: [],
};
// export const layoutAtom = atomWithStorage<CurrentUser | null>(
//     "user-current",
//     initialState,
// )

export const currentUserAtom = atom(async () => {
    const userFromLocalStorage: CurrentUser = localStorage.getItem("permissionSetting") ? JSON.parse(localStorage.getItem("permissionSetting") as string) : ''
    if (userFromLocalStorage) {
        return userFromLocalStorage
    }
    const userCurrent = await getB2BAuth2()
    if (userCurrent.code === Code._200) {
        const userResponse: B2BAuthModel = userCurrent.data as B2BAuthModel;
        // console.log(userResponse, 'userResponse')
        const list = {
            id: userResponse.id,
            syncId: userResponse.syncId,
            fullname: userResponse.fullname ?? "",
            username: userResponse.username ?? "",
            avatar: '',
            roles: [`${userResponse.roleName}`],
            permissions: userResponse.permissions ?? [],
            picType: userResponse.picType,
            objectId: userResponse.objectId
        }
        //   localStorage.setItem("permissionSetting", JSON.stringify({ ...list }))
        return list

    }
})