const serviceCard = document.querySelector(".service__card");

const serviceList = [
    {
        img: "images/service/left1.png",
        title: "Уроки верховой езды",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
        img: "images/service/left2.png",
        title: "Фотосессии",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
        img: "images/service/center1.png",
        title: "Прогулки верхом с тренером",
        text: "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
    },
    {
        img: "images/service/center2.png",
        title: "Фотосессии",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
        img: "images/service/right1.png",
        title: "Прогулки верхом с тренером",
        text: "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
    },
    {
        img: "images/service/right1.png",
        title: "Прогулки верхом с тренером",
        text: "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
    },
];

function serviceCardFn() {
    serviceList.forEach((item) => {
        const html = `
			<div class="card">
				<img
					class="card__img"
					src="${item.img}"
					alt=""
				/>
				<h2 class="card__title">${item.title}</h2>
				<div class="divider"></div>
				<p class="card__text">
					${item.text}
				</p>
			</div> 
		`;
        serviceCard.insertAdjacentHTML("beforeend", html);
    });
}
export default serviceCardFn;
