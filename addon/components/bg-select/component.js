import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  tagName: 'select',
  selectedOptionId: null,
  attributeBindings: ['disabled'],
  init() {
    this._super();
    this.set('_options', {});
  },
  setSelectedOption() {
    let stringified = JSON.stringify(this.get('selected'));
    let match = Object.keys(this.get('_options'))
      .filter((key) => {
        return JSON.stringify(this.get(`_options.${key}`)) === stringified;
      });

    let noSelect;
    if (match[0]) {
      noSelect = this.$(`#${match[0]}`).data('noselect');
    } else {
      noSelect = this.$('option:selected').data('noselect');
    }
    this.toggleNoSelectClass(noSelect);
    this.set('selectedOptionId', match[0] || null);
  },
  didInsertElement() {
    this._super(...arguments);
    this.setSelectedOption();
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.setSelectedOption();
  },
  toggleNoSelectClass(noSelect) {
    if (noSelect) {
      this.$().addClass('bg-select-noselect');
    } else {
      this.$().removeClass('bg-select-noselect');
    }
  },
  change() {
    let id = this.$('option:selected').attr('id');
    let value = this.get(`_options.${id}`);
    let noSelect = this.$('option:selected').data('noselect');

    this.toggleNoSelectClass(noSelect);
    return this.attrs.onSelectChange && this.attrs.onSelectChange(value);
  },
  layout,
  actions: {
    registerOption(optionId, option) {
      this.set(`_options.${optionId}`, option);
    }
  }
});
