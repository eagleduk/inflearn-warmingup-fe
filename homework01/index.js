const ul = document.querySelector("ul");

const DATAS = [
  {
    name: "베이컨 에그 맥그리들",
    type: "breakfase",
    description:
      "메이플 시럽이 들어간 달콤한 핫케이크 번에 국내산 1+등급 계란, 고소한 베이컨으로 완성한 단짠의 맛! 단짠촉촉 맥그리들",
    image:
      "https://www.mcdonalds.co.kr/upload/product/pcfile/1680763652297.png",
    price: 3000,
  },
  {
    name: "소시지 에그 맥그리들",
    type: "breakfase",
    description:
      "메이플 시럽이 들어간 달콤한 핫케이크 번에 국내산 1+등급 계란, 촉촉한 소시지 패티로 완성한 단짠의 맛! 단짠촉촉 맥그리들",
    image:
      "https://www.mcdonalds.co.kr/upload/product/pcfile/1680763520726.png",
    price: 3000,
  },
  {
    name: "베이컨 토마토 에그 머핀",
    type: "breakfase",
    description: "갓 구워내 따뜻하고 신선한 베이컨 토마토 에그 머핀",
    image:
      "https://www.mcdonalds.co.kr/upload/product/pcfile/1646207407116.png",
    price: 3000,
  },
  {
    name: "치킨 치즈 머핀",
    type: "breakfase",
    description: "바삭한 치킨 패티와 고소한 치즈로 아침에도 든든하게!",
    image:
      "https://www.mcdonalds.co.kr/upload/product/pcfile/1597040023675.png",
    price: 3000,
  },
  {
    name: "육개장",
    type: "lunch",
    description: "얼큰한 소사골 육수에 소고기가 듬뿍 들어간 담소의 대표 보양식",
    image: "http://www.damso-story.com/newdamso/img/other/menu/food1.png",
    price: 8000,
  },
  {
    name: "우순대국(소사골)",
    type: "lunch",
    description: "우사골에 소고기와 명품순대를 넣은 담백한 순대국",
    image: "http://www.damso-story.com/newdamso/img/other/menu/food2.png",
    price: 8000,
  },
  {
    name: "우렁 얼큰 순두부",
    type: "lunch",
    description:
      "뽀얀 순두부에 우렁이와 만득이가 가득 들어가 바다내음 물씬 나는 얼큰한 순두부",
    image: "http://www.damso-story.com/newdamso/img/other/menu/food5.png",
    price: 8000,
  },
  {
    name: "순두부정식",
    type: "lunch",
    description: "우렁얼큰순두부와 정갈하게 더해진 편육과 순대",
    image: "http://www.damso-story.com/newdamso/img/other/menu/food9.png",
    price: 8000,
  },
  {
    name: "우정식",
    type: "lunch",
    description: "우순대국과 정갈하게 더해진 편육과 순대",
    image: "http://www.damso-story.com/newdamso/img/other/menu/food6.png",
    price: 8000,
  },
  {
    name: "일품순대국(소사골)",
    type: "lunch",
    description:
      "우사골에 편육과 명품순대 고소한 들깨가루가 가미된 고소하고 얼큰한 순대국",
    image: "http://www.damso-story.com/newdamso/img/other/menu/food4.png",
    price: 8000,
  },
  {
    name: "워커바웃 웰링턴 스테이크",
    type: "dinner",
    description:
      "안심 스테이크 위에 머쉬룸 스프레드로 속을 채운 페이스트리를 올려 바삭함과 부드러움을 동시에 즐길 수 있는 스테이크",
    image:
      "https://www.outback.co.kr/upload/product/20240414/20240414012421752131.jpg",
    price: 34000,
  },
  {
    name: "베이비 백 립",
    type: "dinner",
    description:
      "부드러운 돼지갈비에 아웃백만의 특제 소스를 발라 구워낸 바비큐 요리",
    image:
      "https://www.outback.co.kr/upload/product/20240415/20240415020025218201.jpg",
    price: 47000,
  },
  {
    name: "갈릭 립아이",
    type: "dinner",
    description:
      "구운 마늘과 마늘칩이 어우러진 꽃등심 스테이크(수프 또는 샐러드 제공)",
    image:
      "https://www.outback.co.kr/upload/product/20240415/20240415020003265199.jpg",
    price: 41000,
  },
  {
    name: "소프트플레인 스콘+딸기잼+아메리카노 세트",
    type: "dessert",
    description: "아메리카노 ice:벤티 hot:그란데",
    image:
      "https://www.dessert39.com/data/product/1705022668_314_7IaM7ZSE7Yq47ZSM66CI7J247Iqk7L2Y65S46riw7J687JWE66mU66as7Lm064W4_6rO17ZmI.png",
    price: 4500,
  },
  {
    name: "진짜 맛있는 찹쌀 핫도그+아메리카노 세트",
    type: "dessert",
    description: "케찹+머스타드 포함 아메리카노 ice:벤티 hot:그란데",
    image:
      "https://www.dessert39.com/data/product/1705022739_0722_7KeE7Kec66eb7J6I64qU7LC57IyA7ZWr64E6re47JWE66mU66as7Lm064W4_6rO17ZmI.png",
    price: 4500,
  },
  {
    name: "소시지 크루아상+아메리카노 세트",
    type: "dessert",
    description: "아메리카노 ice:벤티 hot:그란데 ",
    image:
      "https://www.dessert39.com/data/product/1705023136_5924_7IaM7Iuc7KeA7YGs66Gc7JmA7IOB7JWE66mU66as7Lm064W4_6rO17ZmI.png",
    price: 4500,
  },
];

function filterData(type = "all") {
  if (type === "all") return DATAS;
  return DATAS.filter((data) => data.type === type);
}

function render(datas) {
  ul.innerHTML = "";
  datas.forEach((data) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${data.image}" alt="title" />
        <div class="content">
            <div class="title">
                <h4>${data.name}</h4>
                <span>${data.price}원</span>
            </div>
            <p>
                ${data.description}
            </p>
        </div>`;

    ul.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const datas = filterData();
  render(datas);
});

document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", (event) => {
    document
      .querySelectorAll("button")
      .forEach((el) => el.classList.remove("select"));
    event.target.classList.add("select");

    const type = event.target.dataset.type;
    const datas = filterData(type);
    render(datas);
  });
});
