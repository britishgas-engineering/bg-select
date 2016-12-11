import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      array1: [{a: 1}, {a: 2}, {a: 12}],
      defaultValue: Ember.Object.create({a: 12})
    };
  }
});
