import Component from '@ember/component';
import layout from './template';
import {computed} from '@ember/object';

export default Component.extend({
  attributeBindings: ['selected'],
  selected: computed('selectedOptionId', function () {
    return this.get('selectedOptionId') === this.elementId;
  }),
  layout,
  tagName: 'option',
  didInsertElement() {
    this._super(...arguments);
    const action = this.get('register');
    action(this.elementId, this.get('value'))
  }
});
