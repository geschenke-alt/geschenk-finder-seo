
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("giftForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;

    if (!age) {
      alert("Bitte wähle ein Alter aus.");
      return;
    }

    let targetUrl = "";
    if (gender === "frauen") {
      if (age === "18") targetUrl = "/collections/geschenke-fur-frauen";
      else if (age === "30") targetUrl = "/collections/geschenke-fur-frauen";
      else if (age === "40") targetUrl = "/collections/geschenke-zum-40-geburtstag";
      else if (age === "50") targetUrl = "/collections/geschenk-50-geburtstag-frau";
      else if (age === "60") targetUrl = "/collections/geschenke-zum-60-geburtstag";
      else if (age === "70") targetUrl = "/collections/geschenke-zum-70-geburtstag-frau";
      else if (age === "80") targetUrl = "/collections/geschenk-80-geburtstag";
      else if (age === "90") targetUrl = "/collections/geschenk-90-geburtstag";
    } else if (gender === "männer") {
      if (age === "18") targetUrl = "/collections/geschenk-18-geburtstag";
      else if (age === "30") targetUrl = "/collections/geschenk-30-geburtstag-mann";
      else if (age === "40") targetUrl = "/collections/geschenke-zum-40-geburtstag";
      else if (age === "50") targetUrl = "/collections/50-geburtstagsgeschenk";
      else if (age === "60") targetUrl = "/collections/geschenke-zum-60-geburtstag-mann";
      else if (age === "70") targetUrl = "/collections/geschenke-70-geburtstag";
      else if (age === "80") targetUrl = "/collections/80-geburtstag";
      else if (age === "90") targetUrl = "/collections/geschenke-zum-90-geburtstag";
    }

    if (targetUrl) {
      window.location.href = "https://www.makebuy.de" + targetUrl;
    } else {
      alert("Keine passende Kategorie gefunden.");
    }
  });
});
