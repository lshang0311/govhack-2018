import ApiPathFetch from 'node-api-path/lib/ApiPathFetch'

export const path = new ApiPathFetch({
  post_predict: '/dev/predict',
}, 'https://1fmldyorzf.execute-api.ap-southeast-2.amazonaws.com')

