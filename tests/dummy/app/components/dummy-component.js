import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dummy'],
  init() {
    this._super(...arguments);
    this.set('result', JSON.stringify(this.get('model.defaultValue')));
  },
  result: null,
  actions: {
    onChangeHandler(result) {
      this.set('result', JSON.stringify(result));
    }
  }
});
