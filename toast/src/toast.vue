<template>
	<div class="message">
		<p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			msg: {
				type: String,
				default: '请求错误'
			}
		},
		mounted(){
			this.autoClose();
		},
		methods: {
			autoClose(){
				let self = this;
				setTimeout(function(){
					self.$emit('close');
				}, 2000);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		position: fixed;
		top: 50%;
		left: 50%;
		min-width: 30%;
		max-width: 60%;
		padding: 30px 0;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		background: rgba(0, 0, 0, 0.8);
		z-index: 9999;
		p {
			 color: #fff;
			 font-size: 14px;
			 line-height: 18px;
			 padding: 0 20px;
			 text-align: center;
		}
	}
</style>