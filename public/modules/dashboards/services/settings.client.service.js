"use strict";

angular.module("dashboards").factory("settings", [
  function() {
    var whatsAppLink = "https://chat.whatsapp.com/FH2hls1iOeNJF844L4cOjr";
    var mailChimpAction =
      "https://global.us20.list-manage.com/subscribe/post?u=acdf2ad027e3073babce9067d&amp;id=f3a585f6ba";
    var mailChimpName = "b_acdf2ad027e3073babce9067d_f3a585f6ba";

    return {
      whatsAppLink: whatsAppLink,
      mailChimpAction: mailChimpAction,
      mailChimpName: mailChimpName,
    };
  },
]);
