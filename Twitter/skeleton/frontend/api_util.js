const apiUtil = {
  followUser: (userId) => {
    return $.ajax({
      method: "post",
      url: `/users/${userId}/follow`,
      dataType: "json"
    });
  },
  unfollowUser: (userId) => {
    return $.ajax({
      method: "delete",
      url: `/users/${userId}/follow`,
      dataType: "json"
    });
  }
};

module.exports = apiUtil;