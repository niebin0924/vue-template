<template>
  <div class="alert-wrap" v-if="isShow">
    <div class="alert-content">
      <div class="alert-head">
        <span class="line"></span>
        <div class="alert-head-right">
          <span class="alert-title">拨打电话</span>
          <div class="alert-cancel" @click="cancelHandler">取消</div>
        </div>
      </div>
      <div class="alert-desc">
        <div
          class="alert-phone"
          v-for="(item, index) in arr"
          :key="index"
          :class="index===parseInt(activeIndex)?'active':''"
          @click="telHandler(item, index)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    arr: { type: Array },
    activeIndex: { type: Number, default: 0 },
    show: { type: Boolean, default: false }
  },
  data: () => ({
    isShow: false
  }),
  methods: {
    telHandler(item, index) {
      this.isShow = false;
      this.$emit("tel", index);
    },
    cancelHandler() {
      this.isShow = false;
    }
  },
  watch: {
    show(val) {
      this.isShow = val;
    },
    isShow(val) {
      this.$emit("update:show", val);
    }
  }
};
</script>
<style scoped>
.alert-wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 200;
}
.alert-content {
  width: 100%;
  /* height: 4.8rem; */
  background-color: white;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.alert-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 0.43rem; */
  height: 60px;
  line-height: 60px;
}
.alert-head .line {
  background-color: #f39800;
  width: 2px;
  height: 16px;
}
.alert-head .alert-head-right {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.alert-head .alert-head-right .alert-title {
  color: #66645d;
  font-size: 22px;
}
.alert-head .alert-head-right .alert-cancel {
  color: #b2b2b2;
  font-size: 15px;
}
.alert-desc {
  width: 100%;
}
.alert-desc .alert-phone {
  color: #b2b2b2;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid rgba(216, 216, 216, 0.4);
}
.alert-desc .active {
  color: #f39800;
}
</style>


