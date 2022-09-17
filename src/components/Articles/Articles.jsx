import "./style.css";
const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="articles__top">
          <p>Новости</p>
          <a href="#">Все новости</a>
        </div>
        <div className="articles__bottom">
          <article>
            <p className="articles__heading">Капитальный ремонт</p>
            <p className="articles__text">
              В 2012 году в рамках исполнения Федерального закона № 185 от 21
              июля 2007 года «О фонде содействия реформированию…
            </p>
            <p>15.01.2013</p>
          </article>
          <article>
            <p className="articles__heading">Общедомовые нужды</p>
            <p className="articles__text">
              В связи с острой актуальностью и широким освещением в средствах
              массовой информации недовольства плательщиков по вопросу
              начисления...
            </p>
            <p>14.01.2013</p>
          </article>
          <article>
            <p className="articles__heading">О передаче показаний</p>
            <p className="articles__text">
              Напоминаем, чем добросовестнее жители дома будут относиться к
              передаче показаний за потребляемые услуги по индивидуальным
              приборам…
            </p>
            <p>13.01.2013</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Articles;
