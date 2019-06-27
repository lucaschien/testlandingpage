$(function() {
  var $taskIcon = $('.default-task'),
      $mainBox = $('.main-box'),
      $scrollUl = $('.box-1 ul');

  /* 任務區塊的icon大小 */
  function taskIconSize () {
    var mainWidth = $mainBox.width(),
        averageWidth = mainWidth / 4;
    $taskIcon.width(averageWidth).height(averageWidth); //for RWD
    $taskIcon.find('a').css('padding-top', averageWidth/2.5+'px');
    $taskIcon.find('a').eq(2).css('padding-top', averageWidth/3+'px');
    $taskIcon.find('a').eq(3).css('padding-top', averageWidth/3+'px');
  }
  
  function init () {
    taskIconSize();
    window.addEventListener('resize', taskIconSize);
  }

  init();
});