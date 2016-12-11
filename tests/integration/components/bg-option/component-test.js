import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bg-option', 'Integration | Component | bg select/bg option', {
  integration: true
});

test('didInsertElement hook', function(assert) {
  let moackValue = 'apple';
  expect(3);

  this.on('onRegisterHandler', (id, value) => {
    assert.equal(value, moackValue, 'should send the value of option');
    assert.equal( this.$('option').attr('id'), id, 'should send the id of option');
  });

  this.set('value', moackValue);
  this.render(hbs`
    {{#bg-option register=(action 'onRegisterHandler') value=value}}
      template block text
    {{/bg-option}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
