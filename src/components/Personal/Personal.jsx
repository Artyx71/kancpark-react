import "./style.css";
import Sign from "../../img/sign.svg";
const Personal = () => {
  return (
    <section class="personal__area">
      <div class="container">
        <div class="personal__area-boxes">
          <div class="personal__area-right">
            <p class="personal__area-bold">Личный кабинет</p>
            <ul>
              <li>
                <p class="personal__area-text">
                  <img src={Sign} alt="№" />
                  Оплачивайте квитанции и страховые взносы без комиссии
                </p>
                <p class="personal__area-text">
                  <img src={Sign} alt="№" />
                  Передавайте показания счётчиков в пару кликов не выходя из
                  дома
                </p>
                <p class="personal__area-text">
                  <img src={Sign} alt="№" />
                  Смотрите историю начислений и платежей в электронном виде
                </p>
              </li>
            </ul>
          </div>
          <div class="personal__area-left">
            <input type="text" placeholder="Эл. почта" />
            <input type="text" placeholder="Пароль" />
            <a class="forgot" href="#">
              Восстановление пароля
            </a>
            <a class="logon" href="#">
              Войти
            </a>
            <a class="register" href="#">
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
