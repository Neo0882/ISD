import React from "react";
import "./Section_platform.css";

const Section_platform = () => {
  return (
    <>
     <div className="wrapper">
        <div className="container">
          <div className="block_1">
            <h1>Платформы</h1>
            <div className="cards_2">
              <div className="card_2">
                <img src="img-3.png" alt="" />
                <div className="infos">
                  <h2>Fintech</h2>
                  <p>Кредитный конвейер</p>
                  <p>Скоринг</p>
                  <p>E-wallets</p>
                  <p>E-commerce</p>
                </div>
              </div>
              <div className="card_3">
                <img src="img-2.png" alt="" />
                <div className="infos">
                  <h2>API</h2>
                  <p>Управление счетами и картами</p>
                  <p>Платежи и переводы</p>
                  <p>Сервисные функции</p>
                  <p>Инфосервисы</p>
                </div>
              </div>
              <div className="card_2">
                <img src="img-1.png" alt="" />
                <div className="infos">
                  <h2>BaaS</h2>
                  <p>(Banking as a Service) Middleware</p>
                  <p>Банковские услуги как сервис</p>
                </div>
              </div>
              <div className="card_3">
                <img src="img-4.png" alt="" />
                <div className="infos">
                  <h2>BaaP</h2>
                  <p>(Banking as a Platform) Middleware</p>
                  <p>Банковский бекенд (Инфраструктура)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_platform;
