//活动模块
import xhr from './xhr'

class HomeService {

    /**
     * 活动楼盘的信息列表
     * @param {*} current 
     * @param {*} size 
     * @param {*} couponsActivityId 
     */
    getActivityList(couponsActivityId) {
        return xhr({
            url: '/activity/getActivityAwardList',
            body: {
                couponsActivityId
            }
        })
    }

    
    /**
     * 活动注册
     * @param {*} data 
     */
    activityRegister(data) {
        return xhr({
            method: 'post',
            url: '/activity/activityRegister',
            body: data
        })
    }
}




export default new HomeService()