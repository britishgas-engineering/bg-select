import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bg-select/bg-option', function(hooks) {
  setupRenderingTest(hooks);

test('didInsertElement hook', async function (assert) {
  let moackValue = 'apple';
  assert.expect(3);

  this.set('onRegisterHandler', (id, value) => {
    assert.equal(value, moackValue, 'should send the value of option');
    assert.equal( this.$('option').attr('id'), id, 'should send the id of option');
  });

  this.set('value', moackValue);
  await render(hbs`
    {{#bg-option register=(action onRegisterHandler) value=value}}
      template block text
    {{/bg-option}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
});
