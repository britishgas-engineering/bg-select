define('dummy/tests/acceptance/application-test', ['exports', 'qunit', 'dummy/tests/helpers/module-for-acceptance'], function (exports, _qunit, _dummyTestsHelpersModuleForAcceptance) {

  (0, _dummyTestsHelpersModuleForAcceptance['default'])('Acceptance | application');

  (0, _qunit.test)('visiting /', function (assert) {
    visit('/');

    andThen(function () {
      fillIn('.dummy select', 'dinnye 2');
      andThen(function () {
        assert.equal(find('.result').text().trim(), '4');
      });
    });
  });
});
define('dummy/tests/acceptance/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/application-test.js should pass jshint.');
  });
});
define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/components/dummy-component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/dummy-component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/dummy-component.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/bg-option/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('bg-option', 'Integration | Component | bg select/bg option', {
    integration: true
  });

  (0, _emberQunit.test)('didInsertElement hook', function (assert) {
    var _this = this;

    var moackValue = 'apple';
    expect(3);

    this.on('onRegisterHandler', function (id, value) {
      assert.equal(value, moackValue, 'should send the value of option');
      assert.equal(_this.$('option').attr('id'), id, 'should send the id of option');
    });

    this.set('value', moackValue);
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-option', [], ['register', ['subexpr', 'action', ['onRegisterHandler'], [], ['loc', [null, [2, 26], [2, 54]]], 0, 0], 'value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [2, 61], [2, 66]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/bg-option/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/bg-option/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bg-option/component-test.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/bg-select/component-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  (0, _emberQunit.moduleForComponent)('bg-select', 'Integration | Component | bg select', {
    integration: true
  });

  (0, _emberQunit.test)('it', function (assert) {

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 1');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 2');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 3');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', '1'], 0, null, ['loc', [null, [3, 6], [3, 51]]]], ['block', 'bg.option', [], ['value', '2'], 1, null, ['loc', [null, [4, 6], [4, 51]]]], ['block', 'bg.option', [], ['value', '3'], 2, null, ['loc', [null, [5, 6], [5, 51]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], [], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));
    assert.equal(this.$('option').length, 3, 'should render the yeilded options');
  });

  (0, _emberQunit.test)('default value when using string', function (assert) {

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 1');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 2');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 3');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', '1'], 0, null, ['loc', [null, [3, 6], [3, 51]]]], ['block', 'bg.option', [], ['value', '2'], 1, null, ['loc', [null, [4, 6], [4, 51]]]], ['block', 'bg.option', [], ['value', '3'], 2, null, ['loc', [null, [5, 6], [5, 51]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], ['selected', '2'], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$('option:selected').index(), 1, 'should select the required 2nd element');
  });

  (0, _emberQunit.test)('default value when using number', function (assert) {

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 35
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 1');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 35
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 2');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 35
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 3');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', 1], 0, null, ['loc', [null, [3, 6], [3, 49]]]], ['block', 'bg.option', [], ['value', 2], 1, null, ['loc', [null, [4, 6], [4, 49]]]], ['block', 'bg.option', [], ['value', 3], 2, null, ['loc', [null, [5, 6], [5, 49]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], ['selected', 3], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$('option:selected').index(), 2, 'should select the required 3rd element');
  });

  (0, _emberQunit.test)('default value when using POJOs', function (assert) {
    var values = [{
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

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.0.label', ['loc', [null, [3, 37], [3, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.1.label', ['loc', [null, [4, 37], [4, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.2.label', ['loc', [null, [5, 37], [5, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.0', ['loc', [null, [3, 25], [3, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ['loc', [null, [3, 6], [3, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.1', ['loc', [null, [4, 25], [4, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ['loc', [null, [4, 6], [4, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.2', ['loc', [null, [5, 25], [5, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 2, null, ['loc', [null, [5, 6], [5, 71]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], ['selected', ['subexpr', '@mut', [['get', 'selected', ['loc', [null, [2, 26], [2, 34]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$('option:selected').index(), 1, 'should select the required 2nd element');
  });

  (0, _emberQunit.test)('default value when using Ember.Object', function (assert) {
    var values = [_ember['default'].Object.create({
      label: 'label 1',
      aProp: 'abc'
    }), _ember['default'].Object.create({
      label: 'label 2',
      aProp: 'abcd'
    }), _ember['default'].Object.create({
      label: 'label 3',
      aProp: 'abcde'
    })];
    this.set('values', values);

    this.set('selected', _ember['default'].Object.create({
      label: 'label 3',
      aProp: 'abcde'
    }));

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.0.label', ['loc', [null, [3, 37], [3, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.1.label', ['loc', [null, [4, 37], [4, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.2.label', ['loc', [null, [5, 37], [5, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.0', ['loc', [null, [3, 25], [3, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ['loc', [null, [3, 6], [3, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.1', ['loc', [null, [4, 25], [4, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ['loc', [null, [4, 6], [4, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.2', ['loc', [null, [5, 25], [5, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 2, null, ['loc', [null, [5, 6], [5, 71]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], ['selected', ['subexpr', '@mut', [['get', 'selected', ['loc', [null, [2, 26], [2, 34]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$('option:selected').index(), 2, 'should select the required 3rd element');
  });

  // interacting with the component
  (0, _emberQunit.test)('selecting 2nd element using strings', function (assert) {

    expect(1);

    this.on('onChangeHandler', function (selectedValue) {
      assert.equal(selectedValue, 2, 'should return 2nd element value');
    });

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 1');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 2');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 37
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('label 3');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', '1'], 0, null, ['loc', [null, [3, 6], [3, 51]]]], ['block', 'bg.option', [], ['value', '2'], 1, null, ['loc', [null, [4, 6], [4, 51]]]], ['block', 'bg.option', [], ['value', '3'], 2, null, ['loc', [null, [5, 6], [5, 51]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], ['onChangeHandler', ['subexpr', 'action', ['onChangeHandler'], [], ['loc', [null, [2, 33], [2, 59]]], 0, 0]], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    this.$('select').val('label 2').trigger('change');
  });

  // interacting with the component
  (0, _emberQunit.test)('selecting 2nd element using POJOs', function (assert) {
    var values = [{
      label: 'label 1',
      aProp: 'abc'
    }, {
      label: 'label 2',
      aProp: 'abcd'
    }, {
      label: 'label 3',
      aProp: 'abcde'
    }];

    expect(1);
    this.on('onChangeHandler', function (selectedValue) {
      assert.deepEqual(selectedValue, values[1]);
    });

    this.set('values', values);

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.0.label', ['loc', [null, [3, 37], [3, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.1.label', ['loc', [null, [4, 37], [4, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.2.label', ['loc', [null, [5, 37], [5, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.0', ['loc', [null, [3, 25], [3, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ['loc', [null, [3, 6], [3, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.1', ['loc', [null, [4, 25], [4, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ['loc', [null, [4, 6], [4, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.2', ['loc', [null, [5, 25], [5, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 2, null, ['loc', [null, [5, 6], [5, 71]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], ['onChangeHandler', ['subexpr', 'action', ['onChangeHandler'], [], ['loc', [null, [2, 33], [2, 59]]], 0, 0]], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    this.$('select').val('label 2').trigger('change');
  });

  // interacting with the component
  (0, _emberQunit.test)('selecting 2nd element using Ember Object', function (assert) {
    var values = [_ember['default'].Object.create({
      label: 'label 1',
      aProp: 'abc'
    }), _ember['default'].Object.create({
      label: 'label 2',
      aProp: 'abcd'
    }), _ember['default'].Object.create({
      label: 'label 3',
      aProp: 'abcde'
    })];

    expect(1);
    this.on('onChangeHandler', function (selectedValue) {
      assert.deepEqual(selectedValue, values[1]);
    });

    this.set('values', values);

    this.render(_ember['default'].HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 3,
                  'column': 6
                },
                'end': {
                  'line': 3,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.0.label', ['loc', [null, [3, 37], [3, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child1 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 4,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.1.label', ['loc', [null, [4, 37], [4, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        var child2 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.7.3',
              'loc': {
                'source': null,
                'start': {
                  'line': 5,
                  'column': 6
                },
                'end': {
                  'line': 5,
                  'column': 57
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['content', 'values.2.label', ['loc', [null, [5, 37], [5, 57]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.7.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 6,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.0', ['loc', [null, [3, 25], [3, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ['loc', [null, [3, 6], [3, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.1', ['loc', [null, [4, 25], [4, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ['loc', [null, [4, 6], [4, 71]]]], ['block', 'bg.option', [], ['value', ['subexpr', '@mut', [['get', 'values.2', ['loc', [null, [5, 25], [5, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], 2, null, ['loc', [null, [5, 6], [5, 71]]]]],
          locals: ['bg'],
          templates: [child0, child1, child2]
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.7.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bg-select', [], ['onChangeHandler', ['subexpr', 'action', ['onChangeHandler'], [], ['loc', [null, [2, 33], [2, 59]]], 0, 0]], 0, null, ['loc', [null, [2, 4], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    this.$('select').val('label 2').trigger('change');
  });
});
define('dummy/tests/integration/components/bg-select/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/bg-select/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bg-select/component-test.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
