import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      array1: [Ember.Object.create({
        id: 1,
        label: 'yellow'
      }), Ember.Object.create({
        id: 2,
        label: 'green'
      }), Ember.Object.create({
        id: 12,
        label: 'red'
      })],
      defaultValue: Ember.Object.create({id: 2, label: 'green'})
    };
  }
});
