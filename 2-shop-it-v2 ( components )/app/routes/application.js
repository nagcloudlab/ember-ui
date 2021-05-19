import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addToCart(product) {
      this.controller.get('cart').pushObject(product);
    },
  },
});
