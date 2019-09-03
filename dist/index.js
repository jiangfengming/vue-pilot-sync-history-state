var index = (function (router) {
  return function () {
    for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var watch = {};
    data.forEach(function (name) {
      return watch[name] = {
        deep: true,
        handler: function handler(value) {
          var _router$setState;

          return router.setState((_router$setState = {}, _router$setState[name] = value, _router$setState));
        }
      };
    });
    return {
      watch: watch,
      created: function created() {
        var _this = this;

        data.forEach(function (name) {
          var value = router.current.state[name];

          if (value != null) {
            _this[name] = value;
          }
        });
      }
    };
  };
});

export default index;
