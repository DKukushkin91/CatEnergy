ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Cat energy',
          balloonContent: 'ул. Большая Конюшенная, д. 19/8 Санкт-Петербург'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/mappoint.png',
          iconImageSize: [57, 53],
          iconImageOffset: [-5, -38]
      });

      myMap.geoObjects
      .add(myPlacemark)
});
