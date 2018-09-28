import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bg-select', function(hooks) {
  setupRenderingTest(hooks);

  test('changing "selected" value from outside', async function(assert) {
    let values = [{
      label: 'label 1',
      aProp: 'abc'
    }, {
      label: 'label 2',
      aProp: 'abcd'
    }, {
      label: 'label 3',
      aProp: 'abcde'
    }];
    this.set('values', values);

    this.set('selected', values[1]);

    await render(hbs`
      {{#bg-select selected=selected tabindex=3 as |bg|}}
        {{#bg.option value=values.[0]}}{{values.[0].label}}{{/bg.option}}
        {{#bg.option value=values.[1]}}{{values.[1].label}}{{/bg.option}}
        {{#bg.option value=values.[2]}}{{values.[2].label}}{{/bg.option}}
      {{/bg-select}}
    `);

    assert.equal(this.$('option:selected').index(), 1, 'should select the required 2nd element');

    this.set('selected', values[2]);

    assert.equal(this.$('option:selected').index(), 2, 'should select the required 3nd element');
    assert.equal(this.$('select').attr('tabindex'), 3);

  });
});
