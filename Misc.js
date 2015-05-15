
 function getCacher(func) {
      var cache = {}
      return function(x) {
        if (!(x in cache)) {cache[x] = func.call(this, x)}
        return cache[x]
      }
    }
    
     function getLogger(func, log) {
      return function() {
        log.push([].slice.call(arguments))
        return func.apply(this, arguments)
      }
    }
