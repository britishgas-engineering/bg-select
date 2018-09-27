import { module, test } from 'qunit';
import { visit, fillIn, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    visit('/');

    await fillIn('.dummy select', 'yellow');
    assert.equal(find('.dummy .result').textContent.trim(), "{\"id\":1,\"label\":\"yellow\"}");
  });
});
