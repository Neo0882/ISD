import React from "react";
import './Section_score.css'

const Section_score = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="block_3">
            <div className="banner_2">
              <div className="bannerr_2">
                <h4>jiddiy.SCORE</h4>
                <h2>Описание:</h2>
                <p>
                  Проект разработан для проведения проверки <br /> по выдаче
                  кредитов клиентам банков и <br /> микрокредитных организаций.{" "}
                  <br /> Исходя из своей стратегии кредитного риска, <br />{" "}
                  банку очень удобно запускать новый продукт <br /> в <br />{" "}
                  короткие сроки практически без <br /> вмешательства
                  разработчиков.
                </p>
              </div>
              <div className="bannerr_3">
                <h2>Реализация проекта</h2>
                <div className="text_1">
                  <h5>01</h5>
                  <p>
                    Создания стратегии по адаптация системы <br /> путем <br />{" "}
                    изучения внутренней политики организации и <br /> стратегии
                    управления рисками - 1 месяц
                  </p>
                </div>
                <div className="text_2">
                  <h5>02</h5>
                  <p>
                    Разработка и внедрение на основе <br /> стратегии адаптации
                    к системе - 5 месяц
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section_score;
