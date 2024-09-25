import { useMutation, useQuery } from "@tanstack/react-query"

import { apiFetch } from "@/lib/api-fetch"
import type { IUserInfo } from "@/models/user"
import type { ResponseData, B2BLoginModel, UserModel } from "@/api"
import { getUser2 } from "@/api/services/UserService"
import { postB2BAuth } from "@/api/services/B2BAuthService"
import type { WSO2ResponseModel } from "@/api/WSO2ResponseModel"

// export function useUser() {
//   return useQuery({
//     queryKey: ["userInfo"],
//     queryFn: async () => apiFetch<IUserInfo>("/api/user"),
//   })
// }
export function useUser() {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => getUser2() as ResponseData<UserModel>,
  })
}

export function useUserMutation() {
  return useMutation({
    mutationFn: async (params: any) => {
      let bodyRequest: B2BLoginModel = {
        userName: params.username,
        password: params.password
      }
      return await postB2BAuth(bodyRequest) as ResponseData<WSO2ResponseModel>
    }
  })
}
