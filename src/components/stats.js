export default function Stats({ list }) {
  if (!list.length)
    return (
      <footer className="stats">
        <em>🚀 Start adding items.</em>
      </footer>
    );

  const totalitem = list.length;
  const packedi = list.filter((ele) => ele.packed).length;
  const per = Math.round((packedi * 100) / totalitem);
  return (
    <footer className="stats">
      <em>
        {per === 100
          ? "You got everything to go ✈️"
          : `You have ${totalitem} items on your list, and you already packed${" "}
        ${packedi} (${per} %)`}
      </em>
    </footer>
  );
}
