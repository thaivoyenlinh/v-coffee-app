const Menu = () => {
  const ITEMS = ["Home", "Menu", "About Us"];

  return (
    <ul className="flex gap-16">
      {ITEMS.map((item, index) => (
        <li key={index} className="font-bold text-primary">{item}</li>
      ))}
    </ul>
  );
};

export default Menu;
