import request from "umi-request";
export async function test1() {
    return  request('/api/test1')
  };
  export async function getChart() {
    return  request('/api/getChart1')
  };
  export async function getChart2() {
    return  request('/api/getChart2')
  };

export async function test2() {
  return  request('/api/test2')
};
export async function test3() {
  return  request('/api/test2')
};

export async function loginAccount(data:any) {
  return request('/api/login', {
    method: 'POST',
    data,
  })
};
export async function spider(data:any) {
  return request('/api/spider', {
    method: 'POST',
    data,
  })
}
export async function spider2(data:any) {
  return request('/api/spider2', {
    method: 'POST',
    data,
  })
}

export default test1;
