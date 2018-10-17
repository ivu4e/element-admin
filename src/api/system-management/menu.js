import request from '@/utils/request'

const base_url = '/system/menu/'

// ####################################Menu主表API####################################
export function queryAllMenus(data) {
  return request({
    url: base_url + 'queryAll',
    method: 'post',
    data
  })
}

export function editMenu(data) {
  return request({
    url: base_url + 'edit',
    method: 'post',
    data
  })
}

export function syncMenus(data) {
  return request({
    url: base_url + 'sync',
    method: 'post',
    data
  })
}

// ####################################MenuURL中间表API####################################
export function queryAllMenuUrl(params) {
  return request({
    url: base_url + 'query-urls',
    method: 'get',
    params
  })
}

export function addMenuUrl(data) {
  return request({
    url: base_url + 'add-url',
    method: 'post',
    data
  })
}

export function delMenuUrl(data) {
  return request({
    url: base_url + 'del-url',
    method: 'post',
    data
  })
}

// ####################################RoleMenu中间表API####################################
export function queryAllMenuRole(params) {
  return request({
    url: base_url + 'query-roles',
    method: 'get',
    params
  })
}

export function delMenuRole(data) {
  return request({
    url: base_url + 'del-role',
    method: 'post',
    data
  })
}
