// small, medium, large
const Cross = ({ size = "medium" }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 30 * { small: 1, medium: 5, large: 10 }[size]!,
        height: 30 * { small: 1, medium: 5, large: 10 }[size]!,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 15 * { small: 1, medium: 5, large: 10 }[size]!,
          height: 30 * { small: 1, medium: 5, large: 10 }[size]!,
          width: 3 * { small: 1, medium: 5, large: 10 }[size]!,
          backgroundColor: "#fff",
          transform: "rotate(45deg)",
          borderRadius: 25,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: 15 * { small: 1, medium: 5, large: 10 }[size]!,
          height: 30 * { small: 1, medium: 5, large: 10 }[size]!,
          width: 3 * { small: 1, medium: 5, large: 10 }[size]!,
          backgroundColor: "#fff",
          transform: "rotate(-45deg)",
          borderRadius: 25,
        }}
      ></div>
    </div>
  );
};

export default Cross;
