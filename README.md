[![Build Status](https://travis-ci.org/britishgas-engineering/bg-select.svg?branch=master)](https://travis-ci.org/britishgas-engineering/bg-select)

# BG select

BG select is a simple and effective implementation of html select. However there are other open source ember-cli selects we decided to build our version after struggling with memory leaks and not proper event handlings.

This `select` component does not support multiple options since it is not in our requirement list. If you need this support please raise an issue and we are happy to build it for you.

This component handles strings, numbers, arrays, objects as values (even Ember.Objects).

## Implementation

Given a route.model:

```javascript
    model = {
      array1 = [{
        id: 1,
        label: 'yellow'
      }, {
        id: 2,
        label: 'green'
      }, {
        id: 12,
        label: 'red'
      }],
      // just to make a twist it is Ember.Object
      defaultValue: Ember.Object.create({id: 12, label: 'red'})
    }
```
and the hbs:

```hbs
  {{#bg-select onSelectChange=(action 'onChangeHandler') selected=model.defaultValue as |bg|}}
    {{#bg.option value=""}}Select one{{/bg.option}}
    {{#each model.array1 as |el|}}
      {{#bg.option value=el}}{{el.label}}{{/bg.option}}
    {{/each}}
  {{/bg-select}}

```

For working example please check the github io page


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
