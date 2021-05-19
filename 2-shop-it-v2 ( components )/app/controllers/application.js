import Ember from 'ember';

export default Ember.Controller.extend({
  cart: [],
  cartSize: Ember.computed('cart.length', function () {
    return this.get('cart').length;
  }),
});
