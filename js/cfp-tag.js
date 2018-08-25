(function () {
  $(function () {
    var allTags, labels, render, selected, tagCount, wait;
    allTags = $('.cfp-tag').map(function (idx, el) {
      return $(el).text();
    });
    tagCount = _.countBy(allTags, function (t) {
      return t;
    });
    labels = _(tagCount).pairs().sortBy(function (pair) {
      return -pair[1];
    }).map(function (pair) {
      return $("<span />").addClass("label label-default cfp-tag").text(pair[0] + ": " + pair[1]).data('tag', pair[0]);
    }).value();
    $('.cfp-tag-list').append(labels);
    $('.cfp-tag-list > .label').after(' ');
    wait = 300;
    selected = null;
    render = function () {
      if (selected === null) {
        $('.candidate-row').show(wait);
      } else {
        $('.candidate-row').each(function (idx, el) {
          var selectedTag;
          selectedTag = $(el).find('.cfp-tag').filter(function (idx, tagEl) {
            return $(tagEl).data('tag') === selected;
          });
          if (selectedTag.length > 0) {
            return $(el).show(wait);
          } else {
            return $(el).hide(wait);
          }
        });
      }
      return $('.cfp-tag.label').each(function (idx, el) {
        if ($(el).data('tag') === selected) {
          return $(el).addClass('label-primary').removeClass('label-default');
        } else {
          return $(el).addClass('label-default').removeClass('label-primary');
        }
      });
    };
    return $('body').on('click', '.cfp-tag', function (ev) {
      var clicked;
      clicked = $(ev.currentTarget).data('tag');
      selected = clicked === selected ? null : clicked;
      return render();
    });
  });

}).call(this);
