// import ymaps3 from "ymaps";
import ymaps from "ymaps";

export async function initMap() {
    ymaps
        .load()
        .then((maps) => {
            const map = new maps.Map("app", {
                center: [59.963187, 30.302474],
                zoom: 7,
            });
        })
        .catch((error) => console.log("Failed to load Yandex Maps", error));
}

export default initMap;
