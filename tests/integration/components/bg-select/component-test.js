import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bg-select', function (hooks) {
  setupRenderingTest(hooks);

  test('changing "selected" value from outside', async function (assert) {
    const values = [{
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

    assert.equal(this.$('option:selected').index(), 2, 'should select the required 3rd element');
    assert.equal(this.$('select').attr('tabindex'), 3, 'should have tabindex of 3');
  });

  test('check select has aria-labelledby', async function (assert) {
    await render(hbs`
      {{bg-select aria-label="select something"}}
    `);

    assert.equal(this.$('select').attr('aria-label'), 'select something', 'should self label');
  });
});
