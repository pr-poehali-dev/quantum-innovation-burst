export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ЧЕТРА*СЕРВИС</div>
        <nav>
          <a href="#">Услуги</a>
          <a href="#">О нас</a>
          <a href="#">Работы</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать ремонт</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              БУЛЬДОЗЕР
              <br />
              СНОВА В <span>БОЙ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Профессиональный ремонт бульдозеров Четра. Опытные мастера, оригинальные запчасти и гарантия на все работы — возвращаем технику в строй быстро.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Вызвать мастера
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Наши услуги
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              background: `url("https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/db2769b4-3883-48af-a64b-a326672ec556.jpg") center center / cover`,
            }}
          >
            <div className="sticker">
              ГАРАНТИЯ
              <br />
              НА РАБОТЫ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЧЕТРА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              НАДЁЖНО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * РЕМОНТ ЧЕТРА Т-170 * ХОДОВАЯ И ДВИГАТЕЛЬ * ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ * ВЫЕЗД НА ОБЪЕКТ * ОПЫТ 15 ЛЕТ *
            РЕМОНТ ЧЕТРА Т-170 * ХОДОВАЯ И ДВИГАТЕЛЬ * ОРИГИНАЛЬНЫЕ ЗАПЧАСТИ * ВЫЕЗД НА ОБЪЕКТ * ОПЫТ 15 ЛЕТ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все услуги
            </a>
          </div>

          <div className="menu-grid">
            {/* Услуга 1 */}
            <div className="menu-card">
              <span className="menu-tag">Популярное</span>
              <img
                src="https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/a51e6ab5-c08b-47dd-96d4-65c49e755b14.jpg"
                alt="Ремонт ходовой части"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ходовая часть</h3>
                  <span className="price">от 45 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Замена гусениц, катков, звёздочек и натяжных колёс. Полная диагностика ходовой Четра Т-170, Т-11.
                </p>
              </div>
            </div>

            {/* Услуга 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Срочно
              </span>
              <img
                src="https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/857c8f4f-e8d3-4152-ad41-4e98adcfe116.jpg"
                alt="Ремонт гидравлики"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Гидравлика</h3>
                  <span className="price">от 28 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Ремонт и замена гидроцилиндров, насосов, распределителей. Устраняем течи и потерю давления.</p>
              </div>
            </div>

            {/* Услуга 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Выезд
              </span>
              <img
                src="https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/db2769b4-3883-48af-a64b-a326672ec556.jpg"
                alt="Ремонт двигателя"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Двигатель</h3>
                  <span className="price">от 80 000 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Капитальный ремонт и обслуживание дизельных двигателей Д-180, Д-160 и их модификаций.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">15 ЛЕТ В ДЕЛЕ.</h2>
            <p className="vibe-text">
              Мы не просто чиним — мы возвращаем машины в боевую готовность. Работаем с любыми моделями Четра: от Т-170 до Т-35. Выезжаем на объект по всему региону, даём гарантию на все виды работ.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нашей компании
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            НАШИ РАБОТЫ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/a51e6ab5-c08b-47dd-96d4-65c49e755b14.jpg"
                alt="Работа 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/857c8f4f-e8d3-4152-ad41-4e98adcfe116.jpg"
                alt="Работа 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/db2769b4-3883-48af-a64b-a326672ec556.jpg"
                alt="Работа 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/80d0fd2d-8fec-4878-89dd-4ca6fb258eaa/files/a51e6ab5-c08b-47dd-96d4-65c49e755b14.jpg"
                alt="Работа 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ЧЕТРА*СЕРВИС</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Профессиональный ремонт бульдозеров Четра. Опыт с 2009 года — работаем честно, с гарантией.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (800) 000-00-00</li>
            <li>info@chetra-servis.ru</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн–Пт: 8:00–20:00</li>
            <li>Сб: 9:00–18:00</li>
            <li>Вс: выходной</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
