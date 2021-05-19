import Ember from 'ember';

export default Ember.Controller.extend({
  currentTab: 1,
  actions: {
    changeTab(tabIndex) {
      this.set('currentTab',tabIndex)
    },
  },
});
