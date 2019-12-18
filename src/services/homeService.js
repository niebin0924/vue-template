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
     * 区域列表
     * @param {*} areaCode 
     * @param {*} cityName 
     */
    areaList(areaCode='', cityName='') {
        return xhr({
            method: 'POST',
            url: '/f/api/commonFacade/areaList',
            body: {
                areaCode,
                cityName
            }
        })
    }
    getMember(id) {
        return xhr({
            method: 'POST',
            url: '/f/api/memberFacade/getMember',
            body: {
                id
            }
        })
    }
}


export default new HomeService()