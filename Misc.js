"use strict"
 function getCacher(func) {
      var cache = {};
      return function(x) {
        if (!(x in cache)) {
         cache[x] = func.call(this, x);
        }
        return cache[x];
      }
    }
    
     function getLogger(func, log) {
      return function() {
        log.push([].slice.call(arguments));
        return func.apply(this, arguments);
      }
    }
    
    function applyAll(func) {
      if (arguments.length == 1) {
        return func();
      } else {
        arguments.shift = [].shift;
        arguments.shift();
        var args = [].slice.call(arguments);
        return func.apply(null, args)
        }
      }
      
      var NOW = 'только что'
      var AGO = ' назад'
      var MIN = ' мин.'
      var SEC = ' сек.'

      function formatDate(date) {
        var diff, now, result
          now = new Date()
          diff = now.getTime() - date.getTime()
       

          if (diff <= 1000) {
            return NOW
          }

        if (diff < 60 * 1000) {
          result =  Math.round(diff/1000)
          return result + SEC + AGO
        }

        if (diff < 60 * 60 * 1000) {
         result = Math.round(diff/60000)
          return result + MIN + AGO
        }

        return absFormatDate(date)
      }

      function absFormatDate(date) {
        var hh = date.getHours();
        if (hh < 10) hh = '0' + hh;

        var mimi = date.getMinutes();
        if (mimi < 10) mimi = '0' + mimi;

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + mimi;
      }
      
      function getClass(obj) {
  return {}.toString.call(obj).slice(8, -1);
      }
      
      function delay(func, ms) {
      return function() {
        var savedThis=this
        var savedArgs=arguments
        setTimeout(
          function() {
            return func.apply(savedThis, savedArgs)
          }, ms)
      }
    }
    
     function debounce(func, ms){
     var debounced=false
     return function(){
       if (debounced == false){
         debounced=true
         setTimeout(function(){debounced=false}, ms)
         return func.apply(this,arguments)
       }
     }
   }

