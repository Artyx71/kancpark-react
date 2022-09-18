import "./style.css";
import Logo from "../../img/logo.png";
const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__right">
            <img class="header__logo" src={Logo} alt="" />
            <nav class="header__navigation">
              <ul class="header__list">
                <li class="header__list-item">
                  <a href="#">Новости</a>
                </li>
                <li class="header__list-item">
                  <a href="#">Объекты</a>
                </li>
                <li class="header__list-item">
                  <a href="#">О компании</a>
                </li>
                <li class="header__list-item">
                  <a href="#">Услуги</a>
                </li>
                <li class="header__list-item">
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header__left">
            <a class="header__tel" href="#">
              8 (495) 137-96-21
            </a>
            <a class="header__login" href="#">
              Войти
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
