import React from "react";

interface IRating {
  rating: number;
  handleSearchRate: (i: number) => void;
  //  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const StarRating = ({ rating, handleSearchRate }: IRating) => {
  const stars = (n: number) => {
    let star: any[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= n) {
        // star = [...star,"★"]
        star.push(
          <span
            style={{ color: "gold", cursor: "pointer" }}
            onClick={() => {
                handleSearchRate(i)
                console.log(i)
            }}
            key={i}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            style={{ color: "rgba(0,0,0,0.5)", cursor: "pointer" }}
            onClick={() => handleSearchRate(i)}
            key={i}
          >
            ★
          </span>
        );
      }
    }
    return star;
  };

  return (
    <div style={{ padding: "0.5rem", fontSize: "1.5em" }}>{stars(rating)}</div>
  );
};
StarRating.defaultProps = {
  handleSearchRate: () => {},
  rating: 1,
};

export default StarRating;
