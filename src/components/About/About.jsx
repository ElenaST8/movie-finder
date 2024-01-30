import styles from "./about.module.css";

function About() {
  return (
    <div className={styles["about"]}>
      <p className={styles["paragraph"]}>
        Movie Finder — це твір нашої команди ентузіастів кіно, які спільно
        працювали, щоб створити унікальний ресурс для пошуку та відкриття нових
        фільмів.
      </p>
      <div>
        <img
          src="https://media.tproger.ru/uploads/2023/07/b03fc505-a049-44e1-a865-45afeb54aaf9.jpg"
          alt="Our Team"
          className={styles["about-img"]}
        />
      </div>
      <p className={styles["paragraph"]}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Наша команда складається з талановитих
        розробників, дизайнерів та кінофілів, які об'єднали свої зусилля, щоб
        створити Movie Finder як особистого помічника для кіношників усього
        світу.
      </p>
      <p className={styles["paragraph"]}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Наша мета - зробити ваш пошук фільмів
        приємним та захоплюючим, допомагаючи вам знаходити нові шедеври
        кінематографу та обговорювати їх з іншими любителями кіно.
      </p>
      <img
        src="https://ru.goodteam.dev/wp-content/uploads/2020/10/Developers-team-work.jpg"
        alt="Our Team"
        className={styles["about-img"]}
      />
      <p className={styles["about-us"]}>
        <b>Відкривайте для себе захоплюючі світи кіно разом з нами!</b>
      </p>
    </div>
  );
}

export default About;
