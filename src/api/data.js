import axios from '@/libs/api.request'

export const queryAllByLimit = () => {
    return axios.request({
        url: '/pgs/tPersonnelCase/queryAllByLimit',
        method: 'get'
    })
}

export const saveErrorLogger = info => {
    return axios.request({
        url: 'save_error_logger',
        data: info,
        method: 'post'
    })
}