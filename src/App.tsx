import { useState, useRef } from "react";

function App() {
  const initialItems = [
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ];
  const [mainList, setMainList] = useState(initialItems);
  const [fruitList, setFruitList] = useState<{ name: string; type: string }[]>(
    []
  );
  const [vegetableList, setVegetableList] = useState<
    { name: string; type: string }[]
  >([]);
  const timers = useRef(new Map());

  const handleClickFromMain = (item: { name: string; type: string }) => {
    setMainList((prev) => prev.filter((i) => i.name !== item.name));
    const update = item.type === "Fruit" ? setFruitList : setVegetableList;
    update((prev) => [...prev, item]);

    const timeoutId = setTimeout(() => {
      update((prev) => prev.filter((i) => i.name !== item.name));
      setMainList((prev) => [...prev, item]);
      timers.current.delete(item.name);
    }, 5000);

    timers.current.set(item.name, timeoutId);
  };

  const handleClickFromRight = (
    item: { name: string; type: string },
    type: string
  ) => {
    const update = type === "Fruit" ? setFruitList : setVegetableList;
    update((prev) => prev.filter((i) => i.name !== item.name));
    setMainList((prev) => [...prev, item]);

    const timeoutId = timers.current.get(item.name);
    if (timeoutId) {
      clearTimeout(timeoutId);
      timers.current.delete(item.name);
    }
  };

  return (
    <div className="flex min-h-screen w-screen bg-gray-100 p-8 text-black">
      {/* Left Column - Items List */}
      <div className="w-1/3 pr-4">
        {mainList.map((item) => (
          <div
            key={item.name}
            className="mb-2 p-4 text-center font-semibold border border-gray-300 rounded-md bg-white cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => handleClickFromMain(item)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Middle Column - Fruits */}
      <div className="w-1/3 px-2">
        <div className="bg-gray-200 p-2 text-center font-medium">Fruit</div>
        <div className="border border-gray-300 border-t-0 min-h-[calc(100vh-12rem)] p-2">
          {fruitList.map((item) => (
            <div
              key={item.name}
              className="mb-2 p-4 text-center font-semibold border border-gray-300 rounded-md bg-white cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleClickFromRight(item, "Fruit")}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Vegetables */}
      <div className="w-1/3 pl-4">
        <div className="bg-gray-200 p-2 text-center font-medium">Vegetable</div>
        <div className="border border-gray-300 border-t-0 min-h-[calc(100vh-12rem)] p-2">
          {vegetableList.map((item) => (
            <div
              key={item.name}
              className="mb-2 p-4 text-center font-semibold border border-gray-300 rounded-md bg-white cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleClickFromRight(item, "Vegetable")}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
