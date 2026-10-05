const topics = [
  {
    title: "Цените на имотите в Барселона",
    description: "Как се развива пазарът на жилища в Барселона и какво е важно за купувачите.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Покупка на имот в Барселона",
    description: "Основни неща, които трябва да знае човек преди да купи имот в Барселона.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Инвестиции в недвижими имоти",
    description: "Какво трябва да се има предвид при инвестиция в имот в Барселона.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Най-популярните квартали на Барселона",
    description: "Разлики между кварталите и как да изберем подходящ район.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Данъци при покупка на имот",
    description: "Основни данъчни разходи, които могат да възникнат при покупка на имот в Испания.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Документи при покупка на имот",
    description: "Кои документи е важно да бъдат проверени преди сделка.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Ново строителство в Барселона",
    description: "Какво да знаем, когато разглеждаме ново строителство.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Ипотека в Испания",
    description: "Основни въпроси, които купувачите трябва да разгледат при финансиране.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Животът в Барселона",
    description: "Как районът, инфраструктурата и начинът на живот влияят върху избора на имот.",
    source: "Тестова тема",
    date: "2026-10-05"
  },
  {
    title: "Как да изберем имот в Барселона",
    description: "Практичен подход за сравняване на имоти и вземане на решение.",
    source: "Тестова тема",
    date: "2026-10-05"
  }
];

let selectedTopic = null;

const topicList = document.getElementById("topic-list");
const selectedTopicElement = document.getElementById("selected-topic");
const generatePostButton = document.getElementById("generate-post");
const generateImageButton = document.getElementById("generate-image");

function displayTopics() {
  topicList.innerHTML = "";

  topics.forEach((topic, index) => {
    const topicElement = document.createElement("div");

    topicElement.className = "topic";

    topicElement.innerHTML = `
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <small>
        Източник: ${topic.source} | Дата: ${topic.date}
      </small>
      <button onclick="selectTopic(${index})">
        Избери
      </button>
    `;

    topicList.appendChild(topicElement);
  });
}

function selectTopic(index) {
  selectedTopic = topics[index];

  selectedTopicElement.textContent =
    `Избрана тема: ${selectedTopic.title}`;

  generatePostButton.disabled = false;
  generateImageButton.disabled = true;

  document.getElementById("post-result").hidden = true;
  document.getElementById("image-result").innerHTML = "";
  document.getElementById("ready-image").innerHTML = "";
  document.getElementById("ready-text").innerHTML = "";
}

generatePostButton.addEventListener("click", function () {
  if (!selectedTopic) {
    return;
  }

  alert(
    "Темата е избрана успешно. В следващата стъпка ще свържем AI."
  );
});

generateImageButton.addEventListener("click", function () {
  alert(
    "Генерирането на изображение ще бъде добавено по-късно."
  );
});

displayTopics();
