import { Code, type ResponseData } from "@/api";
import { getSystemSetting } from "@/api/services/SystemSettingService";
import type { SystemSettingModel } from "@/api/SystemSettingModel";
import { getToken } from "@/storages/local-storage";
import { atom } from "jotai";
import _ from 'lodash';

export const systemSettingAtom = atom(async () => {
    var systemSetting: SystemSettingModel = {}
    const access_token = getToken() ?? "_custom"
    const settingStr = localStorage.getItem(`systemSettings_${access_token}`) ?? "{}"
    // console.log(settingStr)
    const settings = JSON.parse(settingStr)
    if (!_.isEmpty(settings)) {
        systemSetting = settings
        return systemSetting
    }
    const response: ResponseData<SystemSettingModel> = await getSystemSetting() as ResponseData<SystemSettingModel>
    if (response.code === Code._200) {
        systemSetting = response.data as SystemSettingModel
        localStorage.setItem(`systemSettings_${access_token}`, JSON.stringify({ ...systemSetting }))
    }
    return systemSetting
})