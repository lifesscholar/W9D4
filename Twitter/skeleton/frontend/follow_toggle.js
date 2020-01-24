const apiUtil = require("./api_util");
class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === true) {
      this.$el.html('unfollow!');
    } else {
      this.$el.html('follow!');
    }
  }

  successCB () {
    if (this.followState === true) {
      this.followState = false;
      // debugger
      this.render();
    } else {
      // debugger
      this.followState = true;
      this.render();
    }
  }

  handleClick($el, followState) {
    this.$el.on("click", e => {
      e.preventDefault();
      // debugger

      if (this.followState === false) {
      //   return $.ajax({
      //   method: "post",
      //   url: `/users/${this.userId}/follow`,
      //   dataType: "json",
      //   data: { this.userId },
      //   success: function () {
      //     debugger
      //     this.followState = true;
      //   }
      //   });
        apiUtil.followUser(this.userId).then(this.successCB());
        // then(() => {
          // debugger
          // this.followState = true;
          // this.render();
        // });
      } else {
        // debugger
        // return $.ajax({
        //   method: "delete",
        //   url: `/users/${this.userId}/follow`,
        //   dataType: "json",
        //   data: { followee_id: this.userId },
        //   success: function () {
        //     this.followState = false;
        //   }.then(render())
        // });
        apiUtil.unfollowUser(this.userId).then(this.successCB());
      }
    }).bind(this);
  }

}

module.exports = FollowToggle;