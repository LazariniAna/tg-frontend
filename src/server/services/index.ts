
import api from "@/server/api";
import { showErrorToast } from "@/utils/messages.helper";

export async function getUsers() {
  const response = await api.get(`/users`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}
export async function getUser(id: number) {
  const response = await api.get(`/users/${id}`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}

export async function getContents() {
  const response = await api.get(`/contents`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}

export async function getContent(id: number) {
  const response = await api.get(`/contents/${id}`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}

export async function getScheduling(id: number) {
  const response = await api.get(`/scheduling/${id}`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}

export async function getSchedulings() {
  const response = await api.get(`/scheduling`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}

export async function getSchedulingsUsers(id: string) {
  const response = await api.get(`/scheduling/user/${id}`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}

export async function changePassword() {
  return await api.get(`/password/change`).then(res => res)
}

export async function login(data: { cpf: string, senha: string }) {
  const response = await api.post(`/login`, data).then(res => res.data).catch((e) => {
  });
  if (response)
    return response;
}

export async function createUser(data: any) {
  const response = await api.post(`/users`, data).then(res => res.data).catch((e) => {
    if (typeof (e.response.data) == 'string') showErrorToast(e.response.data)
    return e
  });
  if (response)
    return response;
}

export async function updateUser(id: string | string[] | string, data: any) {
  const response = await api.patch(`/users/${id}`, data).then(res => res.data).catch((e) => {
    if (typeof (e.response.data) == 'string') showErrorToast(e.response.data)
    return e
  });
  if (response)
    return response;
}
