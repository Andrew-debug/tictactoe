// small, belowMedium, medium, large
const Nought = ({ size = "medium" }) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: 30 * { small: 1, belowMedium: 4.3, medium: 5, large: 10 }[size]!,
        height:
          30 * { small: 1, belowMedium: 4.3, medium: 5, large: 10 }[size]!,
        border: `${
          3 * { small: 1, belowMedium: 4.3, medium: 5, large: 10 }[size]!
        }px solid white`,
      }}
    ></div>
  );
};

export default Nought;
