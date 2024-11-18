// import ymaps3 from "ymaps";
import ymaps from "ymaps";

export async function initMap() {
    ymaps
        .load()
        .then((maps) => {
            const map = new maps.Map("app", {
                center: [59.963187, 30.302474],
                zoom: 12,
            });
            // Координаты для геометки
            const coordinates = [59.963187, 30.302474];

            // Создаем геометку
            const placemark = new maps.Placemark(coordinates, {
                // Описание при наведении на метку
                hintContent: "Максимус",
                // Содержимое метки
                balloonContent: "Офис конного клуба Максимус",
            });

            // Добавляем геометку на карту
            map.geoObjects.add(placemark);
        })
        .catch((error) => console.log("Failed to load Yandex Maps", error));
}

export default initMap;
