$(document).ready(function () {
  var cardHtml = "";
  $.each(data, function (i, d) {
    if (d.link) {
      cardHtml += "<a href='" + d.link + "' target='_blank'>";
      cardHtml += "<div class='card'>";
      cardHtml +=
        "<div class='thumbnail' style='background-image:url(img/" +
        d.github +
        "_thumbnail.png)'>";
      cardHtml += "</div>";
      cardHtml += "<div class='content'>";
      cardHtml += "<div class='subject'>";
      if (d.subject) {
        cardHtml += d.subject;
      } else {
        cardHtml += "<span style='color:#999'>제목 없음</span>";
      }
      cardHtml += "</div>";
      cardHtml += "<div class='name'>";
      cardHtml += d.name;
      cardHtml += "<span class='id'>";
      cardHtml += d.id;
      cardHtml += "</span>";
      cardHtml += "</div>";

      cardHtml += "</div>";
      cardHtml += "</div>";
      cardHtml += "</a>";
    }
  });
  $(".card-container").append(cardHtml);
});
