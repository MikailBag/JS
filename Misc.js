//CachingDecorator

 function getCacher(func) {
      var cache = {}
      return function(x) {
        if (!(x in cache)) {cache[x] = func.call(this, x)}
        return cache[x]
      }
    }
