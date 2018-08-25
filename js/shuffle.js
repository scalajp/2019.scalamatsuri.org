/*
 * jQuery shuffle
 *
 * Copyright (c) 2008 Ca-Phun Ung <caphun at yelotofu dot com>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://yelotofu.com/labs/jquery/snippets/shuffle/
 *
 * Shuffles an array or the children of a element container.
 * This uses the Fisher-Yates shuffle algorithm <http://jsfromhell.com/array/shuffle [v1.0]>
 */
(function($){
  $.fn.shuffle = function(random) {
    if (typeof random !== 'function') {
      random = Math.random;
    }
    return this.each(function(){
      var items = $(this).children();
      return (items.length)
        ? $(this).html($.shuffle(items, random))
        : this;
    });
  }

  // ref. http://stackoverflow.com/a/19303725/339515
  $.seededRandom = function(seed) {
    return function() {
      var x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
  };

  $.getSessionSeed = function() {
    function load() {
      return /SM_RAND_SEED=([^;]+)/.test(document.cookie) ? RegExp.$1 : null;
    }
    function save(seed) {
      document.cookie = "SM_RAND_SEED=" + seed + ";path=/";
    }

    var loaded = load();
    // There's no seed in cookie. Generate one.
    if (loaded == null) {
      save(String(Math.random()));
      loaded = load();
    }
    // loaded might be null if cookie is disabled.
    return loaded == null ? 0 : Number(loaded);
  };

  $.shuffle = function(arr, random) {
    for(
      var j, x, i = arr.length; i;
      j = parseInt(random() * i),
      x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }
})(jQuery);

$(function() {
  $(".shuffle").shuffle();
  $(".shuffle-session").shuffle($.seededRandom($.getSessionSeed()));
});
