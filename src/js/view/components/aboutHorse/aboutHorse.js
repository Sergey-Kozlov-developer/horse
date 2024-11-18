const aboutHorse = document.querySelector(".about__horse");

const aboutHorseList = [
    {
        img: "images/horse/1.png",
        title: "Юджин",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
        title: "Жазель",
        img: "images/horse/2.png",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
        img: "images/horse/3.png",
        title: "Хесана",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
        img: "images/horse/4.png",
        title: "Мелисса",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
        title: "Циан",
        img: "images/horse/5.png",
        text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
];

function aboutHorseFn() {
    aboutHorseList.forEach((item) => {
        const html = `
			<div class="card">
                        <img
                            class="horse__img"
                            src="${item.img}"
                            alt=""
                        />
                        <h2 class="card__title">${item.title}</h2>
                        <div class="divider"></div>
                        <p class="card__text">${item.text}</p>
                    </div>
		`;
        aboutHorse.insertAdjacentHTML("beforeend", html);
    });
}
export default aboutHorseFn;
