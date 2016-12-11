import {test} from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function (assert) {
  visit('/');

  andThen(function () {
    fillIn('.dummy select', 'dinnye 2');
    andThen(() => {
      assert.equal(find('.result').text().trim(), '4');
    });
  });
});
