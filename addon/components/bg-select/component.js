import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  tagName: 'select',
  selectedOptionId: null,
  attributeBindings: ['aria-labelledby', 'disabled', 'tabindex'],
  tabindex: null,
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
  change() {
    let id = this.$('option:selected').attr('id');
    let value = this.get(`_options.${id}`);
    const action = this.get('onSelectChange');
    return action && action(value);
  },
  layout,
  actions: {
    registerOption(optionId, option) {
      this.set(`_options.${optionId}`, option);
    }
  }
});
