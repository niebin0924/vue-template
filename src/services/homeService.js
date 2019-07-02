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

}


export default new HomeService()