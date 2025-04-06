
import api from "@/server/api";

export async function getUsers() {
  const response = await api.get(`/users`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}
export async function getUser(id:number) {
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

export async function getContent(id:number) {
  const response = await api.get(`/contents/${id}`).then(res => res).catch((e) => {
  });
  if (response && response.data)
    return response.data;
}

export async function getScheduling(id:number) {
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

export async function changePassword(){
  return await api.get(`/password/change`).then(res => res)
}



