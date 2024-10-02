import { useMutation } from "@tanstack/react-query"

import type { B2BLoginModel, ResponseData } from "@/api"
import { postRegistration9 } from "@/api/services/RegistrationService"
import type { WSO2ResponseModel } from "@/api/WSO2ResponseModel"


// export function useUser() {
//   return useQuery({
//     queryKey: ["userInfo"],
//     queryFn: async () => getB2BAuth2() as ResponseData<B2BAuthModel>,
//   })
// }

export function useImportRegistrationMutation() {
  return useMutation({
    mutationFn: async (params: any) => {
      let bodyRequest = {
        ...params
      }
      return await postRegistration9(bodyRequest) as ResponseData
    }
  })
}
