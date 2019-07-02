// 模块
import xhr from './xhr'

class HomeService {

    /**
     * 登录
     * @param {*} cityCode 
     * @param {*} mobile 
     */
    login(cityCode, mobile) {
        return xhr({
            method: 'POST',
            url: '/f/api/memberFacade/login',
            body: {
                cityCode,
                mobile
            }
        })
    }

    /**
     * 城市索引列表
     * @param {*} areaCode 
     * @param {*} cityName 
     */
    cityIndexList(areaCode='', cityName='') {
        return xhr({
            method: 'POST',
            url: '/f/api/commonFacade/cityIndexList',
            body: {
                areaCode,
                cityName
            }
        })
    }

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