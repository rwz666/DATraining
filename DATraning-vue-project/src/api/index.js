// api.js

const API_BASE_URL = 'http://localhost:8080'; // 基础 URL


/**
 * xxx行业平均薪资
 * @param {*} job 
 * @returns 
 */
async function getAvgSalary(job) {
  const url = `${API_BASE_URL}/salaryAve`;
  const params = new URLSearchParams();
  params.append('job', job); // 添加请求参数

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  // 直接返回响应
  return response; // 不处理数据或错误
}

/**
 * xxx行业不同工作经验平均薪资
 * @param {*} job 
 * @returns 
 */
async function getDfExperAve(job) {
  const url = `${API_BASE_URL}/dfExperAve`;
  const params = new URLSearchParams();
  params.append('job', job); // 添加请求参数

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  // 直接返回响应
  return response; // 不处理数据或错误
}



/**
 * xxx行业不同城市平均薪资
 * @param {*} job 
 * @returns 
 */
async function getDfCityAve(job) {
  const url = `${API_BASE_URL}/dfCityAve`;
  const params = new URLSearchParams();
  params.append('job', job); // 添加请求参数

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  // 直接返回响应
  return response; // 不处理数据或错误
}


/**
 * xxx行业不同城市不同工作经验平均薪资
 * @param {*} job 
 * @returns 
 */
async function getDfCityExperAve(job) {
  const url = `${API_BASE_URL}/dfCityExperAve`;
  const params = new URLSearchParams();
  params.append('job', job); // 添加请求参数

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  // 直接返回响应
  return response; // 不处理数据或错误
}

/**
 * 不同城市xxx行业公司数量
 * @param {*} job 
 * @returns 
 */
async function getDfCityJobNum(job) {
  const url = `${API_BASE_URL}/dfCityJobnum`;
  const params = new URLSearchParams();
  params.append('job', job); // 添加请求参数

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  // 直接返回响应
  return response; // 不处理数据或错误
}
export { getAvgSalary, getDfExperAve, getDfCityAve, getDfCityExperAve, getDfCityJobNum };
