import Ember from 'ember';

export default Ember.Helper.helper(function (params, namedParams) {
  let [amount] = params;
  return Ember.String.htmlSafe(`&#8377;${amount}.00`);
});
