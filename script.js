const TOKEN = "5660168277:AAHfLAmZae19BsDPfhYALgjxxMwPxfaJKw8";
const Chat_id = "936266416";
const Uri_api = `https://api.telegram.org/bot${TOKEN}/sendMEssage`;

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>Имя:</b> ${this.name.value}\n`;
  message += `<b>Год рождения: </b> ${this.date.value}\n`;
  message += `<b>Номер телефона:</b> ${this.tel.value}\n`;
  message += `<b>Кол-во Друзей:</b> ${this.friends.value}\n`;
  message += `<b>Не пизди:</b>${this.penis.value}\n`;
  message += `<b>Любимия актриса:</b>${this.ph.value}\n`;
  message += `<b>Фетиш:</b>${this.fetish.value}\n`;
  message += `<b>Чай или кофе:</b>${this.kc.value}\n`;
  message += `<b>Любимый цвет:</b>${this.color.value}\n`;
  message += `<b>Конечно дрочил:</b>${this.yn.value}\n`;

  axios.post(Uri_api, {
    chat_id: Chat_id,
    parse_mode: "html",
    text: message,
  });
});
