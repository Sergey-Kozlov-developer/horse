const aboutService = document.querySelector(".about__advantages");

const listService = [
    {
        img: "images/about/map1.png",
        title: "Удобное расположение",
        description:
            "Мы находимся недалеко от автостанции «Восточный» чтобы вам было удобно добираться.",
    },
    {
        img: "images/about/map2.png",
        title: "Обеденная зона",
        description:
            "Имеется столовая, чтобы Вы могли перекусить и немного отдохнуть. Бесплатно чай, кофе, печенки.",
    },
    {
        img: "images/about/map3.png",
        title: "Профессиональные тренера",
        description:
            "Наши преподаватели имеют награды в конном спорте, и отличные отзывы среди наших учеников.",
    },
    {
        img: "images/about/map4.png",
        title: "Бесплатная парковка",
        description:
            "У нас имеется просторная парковка, чтобы вы могли без проблем припарковать свой автомобиль.",
    },
];

function aboutServiceCard() {
    listService.forEach((item) => {
        const html = `
		<div class="advantages">
                    <img
                        class="advantages__img"
                        src="${item.img}"
                        alt=""
                    />
                    <h2 class="advantages__title">${item.title}</h2>
                    <p class="advantages__description">${item.description}</p>
                </div>
		`;
        aboutService.insertAdjacentHTML("beforeend", html);
    });
}

export default aboutServiceCard;
