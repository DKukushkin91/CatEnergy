var mapJs = document.querySelector(".main-contacts__mapps");
var mapBg = document.querySelector(".main-contacts__background")

mapJs.style.display = "none";
mapBg.style.display = "none";

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
          center: [59.938635, 30.323118],
          zoom: 18
      }, {
          searchControlProvider: "yandex#search"
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: "Cat energy",
      }, {
          iconLayout: "default#image",
          iconImageHref: "img/mappoint.png",
          iconImageSize: [57, 53],
          iconImageOffset: [-5, -38]
      });

      myMap.geoObjects
      .add(myPlacemark);
});
