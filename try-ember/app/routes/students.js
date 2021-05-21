import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return new Ember.RSVP.Promise(function (resolve, reject) {
    //   let api = 'http://localhost:8080/v1/api/students';
    //   fetch(api)
    //     .then((response) => response.json())
    //     .then((students) => {
    //       resolve(students);
    //     });
    // });
    return this.store.findAll('student');
  },
});
