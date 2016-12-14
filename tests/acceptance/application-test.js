import {test} from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function (assert) {
  visit('/');

  andThen(function () {
    fillIn('.dummy select', 'yellow');
    andThen(() => {
      assert.equal(find('.dummy .result').text().trim(), "{\"id\":1,\"label\":\"yellow\"}");
    });
  });
});
