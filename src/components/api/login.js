import request from '../utils/request';

export function login(data) {
  return request({
    url: `/SMSPlatform/login`,
    method: 'post',
    data: data,
    header: { 'content-type': 'application/x-www-form-urlencoded' }
  });
}
