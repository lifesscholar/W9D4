const FollowToggle = require("./follow_toggle");

$( () => {
  let followedButtons = $('.follow-toggle');
  followedButtons.each(function (i, el) {
    let follow = new FollowToggle(el);
    console.log(follow);
  });
});