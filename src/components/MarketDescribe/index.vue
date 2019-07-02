<template>
    <div class="market-des-wrap">
        <div class="market-rent" v-if="categoryName==='rent'">
            <div class="market-head">
                <div class="market-head-one">
                    <div class="gray">租金</div>
                    <div class="price">{{info&&info.rentAmount}}元/月</div>
                </div>
                <div class="market-head-two">
                    <div class="gray">户型</div>
                    <div class="price">{{info&&info.houseType}}</div>
                </div>
                <div class="market-head-three">
                    <div class="gray">面积</div>
                    <div class="price">{{info&&info.propertyArea}}m²</div>
                </div>
            </div>
            <div class="market-first">
                <div class="market-floor">
                    <span class="gray">楼层：</span>
                    <span class="black">{{info&&info.floor}}{{info&&info.floor==='暂无'||info&&info.floor===''?'':'层'}}</span>
                </div>
                <div class="market-orientation">
                    <span class="gray">朝向：</span>
                    <span class="black">{{info&&info.orientation}}</span>
                </div>
            </div>
            <div class="market-second">
                <div class="market-zhuangxiu">
                    <span class="gray">装修：</span>
                    <span class="black">{{info&&info.decoration}}</span>
                </div>
                <div class="market-height">
                    <span class="gray">类型：</span>
                    <span class="black">{{info&&info.typeConfig}}</span>
                </div>
            </div>
            <div class="market-third">
                <div class="market-year">
                    <span class="gray">建房年代：</span>
                    <span class="black">{{info&&info.completeYear}}{{info&&info.completeYear===''?'':'年'}}</span>
                </div>
            </div>
        </div>
        <div class="market-sale" v-if="categoryName==='sale'">
            <div class="market-head">
                <div class="market-head-one">
                    <div class="gray">售价</div>
                    <div class="price">{{info&&info.totalPriceAmount}}万</div>
                </div>
                <div class="market-head-two">
                    <div class="gray">户型</div>
                    <div class="price">{{info&&info.houseType}}</div>
                </div>
                <div class="market-head-three">
                    <div class="gray">面积</div>
                    <div class="price">{{info&&info.propertyArea}}m²</div>
                </div>
            </div>
            <div class="market-first">
                <div class="market-left">
                    <span class="gray">购买时间：</span>
                    <span class="black">{{info&&info.equity==='0'?'不满两年':info&&info.equity==='1'?'满两年':'满五年'}}</span>
                </div>
            </div>
            <div class="market-second">
                <div class="market-left">
                    <span class="gray">单价：</span>
                    <span class="black">{{info&&info.unitPriceAmount}}元/平</span>
                </div>
                <div class="market-right">
                    <span class="gray">朝向：</span>
                    <span class="black">{{info&&info.orientation}}</span>
                </div>
            </div>
            <div class="market-third">
                <div class="market-left">
                    <span class="gray">楼层：</span>
                    <span class="black">{{info&&info.floor}}{{info&&info.floor==='暂无'||info&&info.floor===''?'':'层'}}</span>
                </div>
                <div class="market-right">
                    <span class="gray">类型：</span>
                    <span class="black">{{info&&info.typeConfig}}</span>
                </div>
            </div>
            <div class="market-fourth">
                <div class="market-left">
                    <span class="gray">装修：</span>
                    <span class="black">{{info&&info.decoration}}</span>
                </div>
            </div>
            <div class="market-fifth">
                <div class="market-left">
                    <span class="gray">建房年代：</span>
                    <span class="black">{{info&&info.completeYear}}{{info&&info.completeYear===''?'':'年'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        categoryName: { type: String, default: 'sale' },
        info: { type: Object }
    }
}
</script>
<style scoped>
.gray {
    color: #b2b2b2;
    font-size: 15px;
}
.black {
    color: #66645d;
    font-size: 15px;
}
.price {
    color: #F39800;
    font-size: 15px;
    font-weight: bold;
}
.market-des-wrap {
    width: 100%;
}
.market-rent, .market-sale {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}
.market-head {
    width: 100%;
    height: 60px;
    margin: 20px 0;
    background-color: rgba(243,152,0,0.1);
    border-radius: 6px;
    display: flex;
    align-items: center;
}
.market-head-one, .market-head-two, .market-head-three {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.6;
}
.market-first, .market-second, .market-third, .market-fourth, .market-fifth {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.market-left {
    width: 60%;
    display: flex;
}
.market-right {
    width: 40%;
    display: flex;
}
.market-first .market-floor, .market-second .market-zhuangxiu, .market-third .market-year {
    width: 60%;
    display: flex;
}
.market-first .market-orientation, .market-second .market-height {
    width: 40%;
    display: flex;
}
.market-sale {
    
}
</style>

