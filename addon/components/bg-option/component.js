import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  attributeBindings: ['selected'],
  selected: Ember.computed('selectedOptionId', function () {
    return this.get('selectedOptionId') === this.elementId ? 'selected' : '';
  }),
  layout,
  tagName: 'option',
  didInsertElement() {
    this._super(...arguments);
    this.sendAction('register', this.elementId, this.get('value'));
  }
});
