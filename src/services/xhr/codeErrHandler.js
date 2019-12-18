export default (msg, url) => {
    if (!msg) {
      console.error('接口返回数据结构无法解析', msg)
      return false
    }
    switch (parseInt(msg.status)) {
      case 1: // 默认正确的code
      // 以下为特殊处理,需要放到控制层处理的错误code,必须注释使用页面和错误行为
      case 44011: // 手机号码已领取奖励，请勿重复参加
        return true
      case 21600: // 无分享记录的时候调的接口错误，不提示
        return false
      default:
        console.error(msg)
        // this.$toast(msg.responseMessage)
        return false
    }
  }
  