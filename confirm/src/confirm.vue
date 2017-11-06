<template>
  <!-- 确认弹窗 -->
  <div class="mask">
      <div class="confirm_module">
          <div class="confirm">{{msg}}</div>
          <div class="footer">
              <div class="btn cancel" @click="cancel()">取消</div>
              <div class="btn sure" @click="confirm()">确认</div>
          </div>
      </div>
  </div>
</template>

<script>
	export default {
		props: {
      msg: {
        type: String,
        default: '确认信息'
      }
    },
		methods: {
			cancel(){
				this.$emit('cancel');
			},
			confirm(){
				this.$emit('confirm');
			}
		}
	}
</script>

<style lang="scss" scoped>
/* 确认弹窗 */
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.confirm_module {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 240px;
  background: #fff;
  transform: translate(-50%, -50%);
  background: #fff;
  overflow: hidden;
  .confirm {
    color: #858585;
    font-size: 14px;
    line-height: 20px;
    padding: 25px 30px;
    border-bottom: 1px solid #e0e0e0;
  }
  .footer {
    display: flex;
    .btn {
	    flex: 1;
      color: #000;
	    font-size: 14px;
	    height: 44px;
	    line-height: 44px;
	    text-align: center;
      border-right: 1px solid #e0e0e0;
      &:last-child {
        border-right: 0;
      }
	  }
  }
  
}
</style>