// Sticky sidebar menu
$('#sidebar').affix({
      offset: {
        top: function () {
            var offsetTop      = $('#sidebar').offset().top
            var sideBarMargin  = parseInt($('#sidebar').children(0).css('margin-top'), 10)
            var pageHeaderHeight = $('.page-header').height()
            var navOuterHeight = $('.navbar').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin + pageHeaderHeight)
        },
        bottom: function () {
            return (this.bottom = $('footer').outerHeight(true))
        }
      }
});