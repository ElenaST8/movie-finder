import styles from "./description.module.css";

function Description() {
  return (
    <div className={styles["description"]}>
      <h1>
        Ласкаво просимо до Movie Finder - вашого особистого кінематографічного
        провідника!
      </h1>
      <p className={styles["description-paragraph"]}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ми створили цей сайт, щоб зробити ваш
        пошук фільмів максимально захоплюючим та зручним. На Movie Finder вас
        чекає величезна база даних фільмів з усього світу. Незалежно від того,
        чи ви шукаєте новинки, класику чи пригодницькі стрічки, ми маємо все для
        вас. Дозвольте собі відкрити для себе найцікавіші кіноперлини без зайвих
        обмежень.
      </p>

      <h2 className={styles["description-h2"]}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Основні Функції:
      </h2>

      <ul>
        <li>
          <strong>Пошук за назвою:</strong> Знаходьте фільми, які вам цікаві,
          швидко та просто, використовуючи пошук.
        </li>
        <li>
          <strong>Детальна інформація:</strong> Дізнайтеся більше про акторський
          склад, режисерів та оцінки інших глядачів.
        </li>
        <li>
          <strong>Оцінка фільму:</strong> Поставте свою оцінку фільму та дайте
          йому свій власний рейтинг.
        </li>
      </ul>

      <img
        src="https://itc.ua/wp-content/uploads/2022/12/GridArt_20221219_153615897-scaled.jpg"
        alt="Gallery of movies"
        className={styles["description-img"]}
      />

      <p className={styles["description-paragraph"]}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Наш сайт - це не просто платформа для
        пошуку фільмів, це місце, де ви можете відкривати для себе нові шедеври
        та насолоджувалися найкращими кіносюжетами!
      </p>
    </div>
  );
}

export default Description;
