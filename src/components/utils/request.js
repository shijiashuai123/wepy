let url = 'http://101.132.141.83';
function request(o) {
  return new Promise((res, rej) => {
    var p = {
      url: '',
      method: '',
      success(val) {
        return res(val);
      },
      fail(err) {
        return rej(err);
      }
    };
    p.header =
      'header' in o
        ? o.header
        : {
            'content-type': 'application/json',
            Cookie: 'JSESSIONID=25174966D4D6B03D595184E75190896A'
          };
    'data' in o ? (p.data = o.data) : '';
    'method' in o ? (p.method = o.method) : (p.method = 'get');
    o.url.substr(0, 4) == 'http' ? (p.url = o.url) : (p.url = url + o.url);
    if ('params' in o) {
      var par = [];
      // var par = ''
      for (var i in o.params) {
        par.push(i + '=' + o.params[i]);
        // par += i + '=' + o.params[i] + '&'
      }
      p.url = p.url + '?' + par.join('&');
      // p.url = p.url + '?' + par.substr(0, par.length - 1)
      // console.log(p.url)
    }
    wx.request(p);
  });
}
export default request;
