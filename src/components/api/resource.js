import request from '../utils/request';

// 获取短信剩余数量
export function getSMScount(data) {
  return request({
    url: `/SMSPlatform/getnumber`,
    method: 'post'
  });
}
// 获取短信列表
export function getSMSList(data) {
  return request({
    url: `/SMSPlatform/getlist`,
    method: 'post'
  });
}
// 查询某个手机号
export function getsinglelist(data) {
  var par = {
    varue: data
  };
  // varue: 3;
  return request({
    url: `/SMSPlatform/getsinglelist`,
    method: 'post',
    data: par,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      Cookie: 'JSESSIONID=25174966D4D6B03D595184E75190896A'
    }
  });
}
// 发送短信
export function sendsms(data) {
  // sendTo: 123;
  // courierName: 123123123;
  // authCode: 172112324;
  return request({
    url: `/SMSPlatform/sendsms`,
    method: 'post',
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      Cookie: 'JSESSIONID=25174966D4D6B03D595184E75190896A'
    }
  });
}
