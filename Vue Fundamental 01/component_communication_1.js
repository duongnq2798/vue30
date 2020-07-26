Vue.component('coupon', {
  template:
    '<input placeholder="Enter your coupon code" @blur="onCouponApplied"></input>',

  methods: {
    onCouponApplied() {
      this.$emit('applied')
    },
  },
})

new Vue({
  el: '#root',
  data: {
    couponApplied: false,
  },

  methods: {
    onCouponApplied() {
      this.couponApplied = true
    },
  },
})
