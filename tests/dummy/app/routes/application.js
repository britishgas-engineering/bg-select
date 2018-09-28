import Route from '@ember/routing/route';

import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return {
      array1: [EmberObject.create({
        id: 1,
        label: 'yellow'
      }), EmberObject.create({
        id: 2,
        label: 'green'
      }), EmberObject.create({
        id: 12,
        label: 'red'
      })],
      defaultValue: EmberObject.create({id: 2, label: 'green'})
    };
  }
});
