import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dummy'],
  result: null,
  actions: {
    onChangeHandler(result) {
      this.set('result', result);
    }
  }
});
