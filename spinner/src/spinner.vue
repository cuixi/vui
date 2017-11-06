<template>
	
  <!-- loading -->
  <div class="mask">
      <div class="spinner_load">
          <span class="spinner"></span>
          <span class="text">{{txt}}...</span>
      </div>
  </div>

</template>

<script>
	export default {
		props: {
			txt: {
				type: String,
				default: '加载中'
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* loading */
	.mask {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background: transparent;
	  z-index: 9999;
	}

	.spinner_load {
	  position: fixed;
	  top: 50%;
	  left: 50%;
	  padding: 20px;
	  border-radius: 5px;
	  text-align: center;
	  transform: translate(-50%, -50%);
	  background: rgba(0, 0, 0, 0.7);
	}
	.spinner_load .spinner {
	  display: inline-block;
	  width: 30px;
	  height: 30px;
	  border: 4px solid transparent;
	  border-color: #858585 #858585 #858585 transparent;
	  border-radius: 50%;
	  animation: spinner-rotate 0.8s infinite linear;
	}
	.spinner_load .text {
	  display: block;
	  color: #fff;
	  font-size: 1.4rem;
	  text-align: center;
	  margin-top: 0.2rem;
	}

	@keyframes spinner-rotate {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
</style>