import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  tagName: 'select',
  selectedOptionId: null,
  init() {
    this._super();
    this.set('_options', {});
    Ember.run.scheduleOnce('actions', this, () => {
      let stringified = JSON.stringify(this.get('selected'));
      let match = Object.keys(this.get('_options'))
        .filter((key) => {
          return JSON.stringify(this.get(`_options.${key}`)) === stringified;
        });
      this.set('selectedOptionId', match[0] || null);
    });
  },
  change() {
    let id = this.$('option:selected').attr('id');
    let value = this.get(`_options.${id}`);
    return this.attrs.onChangeHandler && this.attrs.onChangeHandler(value);
  },
  layout,
  actions: {
    registerOption(optionId, option) {
      this.set(`_options.${optionId}`, option);
    }
  }
});
