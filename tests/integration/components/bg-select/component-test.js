import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('bg-select', 'Integration | Component | bg select', {
  integration: true
});

test('it', function (assert) {

  this.render(hbs`
    {{#bg-select as |bg|}}
      {{#bg.option value="1"}}label 1{{/bg.option}}
      {{#bg.option value="2"}}label 2{{/bg.option}}
      {{#bg.option value="3"}}label 3{{/bg.option}}
    {{/bg-select}}
  `);
  assert.equal(this.$('option').length, 3, 'should render the yeilded options');
});


test('default value when using string', function (assert) {

  this.render(hbs`
    {{#bg-select selected="2" as |bg|}}
      {{#bg.option value="1"}}label 1{{/bg.option}}
      {{#bg.option value="2"}}label 2{{/bg.option}}
      {{#bg.option value="3"}}label 3{{/bg.option}}
    {{/bg-select}}
  `);

  assert.equal(this.$('option:selected').index(), 1, 'should select the required 2nd element');
});

test('default value when using number', function (assert) {

  this.render(hbs`
    {{#bg-select selected=3 as |bg|}}
      {{#bg.option value=1}}label 1{{/bg.option}}
      {{#bg.option value=2}}label 2{{/bg.option}}
      {{#bg.option value=3}}label 3{{/bg.option}}
    {{/bg-select}}
  `);

  assert.equal(this.$('option:selected').index(), 2, 'should select the required 3rd element');
});


test('default value when using POJOs', function (assert) {
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

  this.render(hbs`
    {{#bg-select selected=selected as |bg|}}
      {{#bg.option value=values.[0]}}{{values.[0].label}}{{/bg.option}}
      {{#bg.option value=values.[1]}}{{values.[1].label}}{{/bg.option}}
      {{#bg.option value=values.[2]}}{{values.[2].label}}{{/bg.option}}
    {{/bg-select}}
  `);

  assert.equal(this.$('option:selected').index(), 1, 'should select the required 2nd element');
});

test('default value when using Ember.Object', function (assert) {
  let values = [Ember.Object.create({
    label: 'label 1',
    aProp: 'abc'
  }), Ember.Object.create({
    label: 'label 2',
    aProp: 'abcd'
  }), Ember.Object.create({
    label: 'label 3',
    aProp: 'abcde'
  })];
  this.set('values', values);

  this.set('selected', Ember.Object.create({
    label: 'label 3',
    aProp: 'abcde'
  }));

  this.render(hbs`
    {{#bg-select selected=selected as |bg|}}
      {{#each values as |value|}}
        {{#bg.option value=value}}{{values.label}}{{/bg.option}}
      {{/each}}
    {{/bg-select}}
  `);

  assert.equal(this.$('option:selected').index(), 2, 'should select the required 3rd element');
});

// interacting with the component
test('selecting 2nd element using strings', function (assert) {

  assert.expect(1);

  this.on('onChangeHandler', (selectedValue) => {
    assert.equal(selectedValue, 2, 'should return 2nd element value');
  });

  this.render(hbs`
    {{#bg-select onSelectChange=(action 'onChangeHandler') as |bg|}}
      {{#bg.option value="1"}}label 1{{/bg.option}}
      {{#bg.option value="2"}}label 2{{/bg.option}}
      {{#bg.option value="3"}}label 3{{/bg.option}}
    {{/bg-select}}
  `);

  this.$('select').val('label 2').trigger('change');
});

// interacting with the component
test('selecting 2nd element using POJOs', function (assert) {
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

  assert.expect(1);
  this.on('onChangeHandler', (selectedValue) => {
    assert.deepEqual(selectedValue, values[1]);
  });

  this.set('values', values);

  this.render(hbs`
    {{#bg-select onSelectChange=(action 'onChangeHandler') as |bg|}}
      {{#bg.option value=values.[0]}}{{values.[0].label}}{{/bg.option}}
      {{#bg.option value=values.[1]}}{{values.[1].label}}{{/bg.option}}
      {{#bg.option value=values.[2]}}{{values.[2].label}}{{/bg.option}}
    {{/bg-select}}
  `);

  this.$('select').val('label 2').trigger('change');

});

// interacting with the component
test('selecting 2nd element using Ember Object', function (assert) {
  let values = [Ember.Object.create({
    label: 'label 1',
    aProp: 'abc'
  }), Ember.Object.create({
    label: 'label 2',
    aProp: 'abcd'
  }), Ember.Object.create({
    label: 'label 3',
    aProp: 'abcde'
  })];

  assert.expect(1);
  this.on('onChangeHandler', (selectedValue) => {
    assert.deepEqual(selectedValue, values[1]);
  });

  this.set('values', values);

  this.render(hbs`
    {{#bg-select onSelectChange=(action 'onChangeHandler') as |bg|}}
      {{#bg.option value=values.[0]}}{{values.[0].label}}{{/bg.option}}
      {{#bg.option value=values.[1]}}{{values.[1].label}}{{/bg.option}}
      {{#bg.option value=values.[2]}}{{values.[2].label}}{{/bg.option}}
    {{/bg-select}}
  `);

  this.$('select').val('label 2').trigger('change');

});


test('changing "selected" value outside', function (assert) {
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

  this.render(hbs`
    {{#bg-select selected=selected as |bg|}}
      {{#bg.option value=values.[0]}}{{values.[0].label}}{{/bg.option}}
      {{#bg.option value=values.[1]}}{{values.[1].label}}{{/bg.option}}
      {{#bg.option value=values.[2]}}{{values.[2].label}}{{/bg.option}}
    {{/bg-select}}
  `);

  assert.equal(this.$('option:selected').index(), 1, 'should select the required 2nd element');

  this.set('selected', values[2]);

  assert.equal(this.$('option:selected').index(), 2, 'should select the required 3nd element');

});
