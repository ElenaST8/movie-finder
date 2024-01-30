import { useState } from "react";
import styles from "./starRating.module.css";
import Star from "../Star/Star";

function StarRating({ onSetRating }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div className={styles["container-style"]}>
      <div className={styles["star-container-style"]}>
        {Array.from({ length: 10 }, (el, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p className={styles["text-style"]}>{tempRating || rating}</p>
    </div>
  );
}

export default StarRating;
