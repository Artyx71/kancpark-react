import "./style.css";
import footerLogo from "../../img/footerLogo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <section className="footer__left">
            <input type="text" placeholder="Поиск" />
            <img src={footerLogo} alt="" />
          </section>
          <section className="footer__middle">
            <ul className="footer_list">
              <li className="footer__list-item">
                <a href="#">Новости</a>
              </li>
              <li className="footer__list-item">
                <a href="#">Объекты</a>
              </li>
              <li className="footer__list-item">
                <a href="#">О компании</a>
              </li>
              <li className="footer__list-item">
                <a href="#">Услуги</a>
              </li>
              <li className="footer__list-item">
                <a href="#">Контакты</a>
              </li>
            </ul>
          </section>
          <section className="footer__right">
            <p>Диспетчерская</p>
            <p className="footer__tel">+7 (495) 777-25-43 </p>
            <p>Есть жалобы или предложения?</p>
            <a className="footer__button" href="#">
              Оставить обращение
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
