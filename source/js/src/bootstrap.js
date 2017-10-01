/* global NexT: true */

$(document).ready(function () {

  $(document).trigger('bootstrap:before');

  NexT.utils.isMobile() && window.FastClick.attach(document.body);

  NexT.utils.lazyLoadPostsImages();

  NexT.utils.registerESCKeyEvent();

  NexT.utils.registerBackToTop();

  // Mobile top menu bar.
  $('.site-nav-toggle button').on('click', function () {
    var $siteNav = $('.site-nav');
    var ON_CLASS_NAME = 'site-nav-on';
    var isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
    var animateAction = isSiteNavOn ? 'slideUp' : 'slideDown';
    var animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';

    $siteNav.stop()[animateAction]('fast', function () {
      $siteNav[animateCallback](ON_CLASS_NAME);
    });
  });

  /**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'layout/_partials/head.swig' file.
   */
  CONFIG.fancybox && NexT.utils.wrapImageWithFancyBox();
  CONFIG.tabs && NexT.utils.registerTabsTag();

  NexT.utils.embeddedVideoTransformer();
  NexT.utils.addActiveClassToMenuItem();


  // Define Motion Sequence.
  NexT.motion.integrator
    .add(NexT.motion.middleWares.logo)
    .add(NexT.motion.middleWares.menu)
    .add(NexT.motion.middleWares.postList)
    .add(NexT.motion.middleWares.sidebar);

  $(document).trigger('motion:before');

  // Bootstrap Motion.
  CONFIG.motion.enable && NexT.motion.integrator.bootstrap();

  $(document).trigger('bootstrap:after');

  // setTimeout(function (){
  //   var adsHTML = function (slot){
  //     return '<div align="center"><ins class="adsbygoogle"'+
  //     'style="display:block"'+
  //     'data-ad-client="ca-pub-8386186071288063"'+
  //     'data-ad-slot="'+ slot +'"'+
  //     'data-ad-format="auto"></ins></div>';
  //   };
  //   var bigsquare = function (slot){
  //     return '<ins class="adsbygoogle"'+
  //       'style="display:inline-block;width:336px;height:280px"'+
  //       'data-ad-client="ca-pub-8386186071288063"'+
  //       'data-ad-slot="'+slot+'"></ins>';
  //   };
  //   var addSlots = function (el, slot, type){
  //     el[type](adsHTML(slot));
  //     (adsbygoogle = window.adsbygoogle || []).push({});
  //   }
  //   if (NexT.utils.isDesktop()){
  //     // sidebar
  //     // addSlots($('#sidebar').find('.sidebar-inner'), 6065100430, 'append');
  //     // <!-- bigsquare -->
  //     var bigsquare1 = $(bigsquare(1697862430));
  //     $("#comments").after(bigsquare1);
  //     bigsquare1.wrap('<div style="float:left;"></div>');
  //     (adsbygoogle = window.adsbygoogle || []).push({});
  //     // <!-- bigsquare2 -->
  //     var bigsquare2 = $(bigsquare(9860257630));
  //     $("#comments").after(bigsquare2);
  //     bigsquare2.wrap('<div style="float:right;"></div>');
  //     (adsbygoogle = window.adsbygoogle || []).push({});
  //   }
  // }, 0);
});
if (location.protocol != 'https:' && location.host === 'robin-front.github.io') {
 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
