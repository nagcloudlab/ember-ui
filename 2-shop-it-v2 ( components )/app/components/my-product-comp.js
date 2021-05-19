import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['list-group-item'],
  currentTab: 1,
  actions: {
    changeTab(tabIndex) {
      this.set('currentTab', tabIndex);
    },
    buy(product) {
      // console.log('my-product-comp', product);
      this.sendAction('buy',product)
    },
  },
});
