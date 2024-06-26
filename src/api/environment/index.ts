import request from '@/axios'
import {
  NodeListResponse,
  NodeListParams,
  ContainerListResponse,
  CreateContainerParams
} from './types'

export const getNodeApi = (params: NodeListParams) => {
  return request.get<NodeListResponse>({ url: '/mock/node/list', params })
}

export const getContainerApi = () => {
  return request.get<ContainerListResponse>({ url: '/docker/containers' })
}

export const getImageApi = () => {
  return request.get<ContainerListResponse>({ url: '/docker/images' })
}

export const createContainerApi = (data: CreateContainerParams) => {
  return request.post({ url: '/docker/containers', data })
}

export const delContainerApi = (params: { id_or_name: string }) => {
  return request.delete({ url: '/docker/containers', params })
}

// export const getUserByIdApi = (params: DepartmentUserParams) => {
//   return request.get<DepartmentUserResponse>({ url: '/mock/department/users', params })
// }

// export const deleteUserByIdApi = (ids: string[] | number[]) => {
//   return request.post({ url: '/mock/department/user/delete', data: { ids } })
// }

// export const saveUserApi = (data: any) => {
//   return request.post({ url: '/mock/department/user/save', data })
// }

// export const saveDepartmentApi = (data: any) => {
//   return request.post({ url: '/mock/department/save', data })
// }

// export const deleteDepartmentApi = (ids: string[] | number[]) => {
//   return request.post({ url: '/mock/department/delete', data: { ids } })
// }

// export const getDepartmentTableApi = (params: any) => {
//   return request.get({ url: '/mock/department/table/list', params })
// }
