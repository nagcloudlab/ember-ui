import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: 'Laptop',
        price: 149000,
        description: 'New mac pro',
        isAvailable: true,
        image: 'images/Laptop.png',
      },
      {
        name: 'Mobile',
        price: 19000,
        description: 'New pro',
        isAvailable: true,
        image: 'images/Mobile.png',
      },
    ];
  },
  // actions: {
  //   addToCart(product) {
  //     console.log('products-route', product);
  //   },
  // },
});
