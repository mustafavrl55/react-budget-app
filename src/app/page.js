"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { MyContext } from "../context/my-context";

export default function App() {
  const { items, setItems } = useContext(MyContext);

  const AddNewItem = (newItems) => {
    setItems([...items, newItems]);
  };

  const [itemName, setItemName] = useState();

  const [itemPrice, setItemPrice] = useState();

  const [itemDate, setItemDate] = useState();

  const [budgetAmount, setBudgetAmount] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName === "") {
      alert("input boş olamaz");
      return;
    }

    const newItem = {
      id: Math.random(),
      itemName,
      itemPrice,
      itemDate,
    };

    AddNewItem(newItem);
    setItemName("");
    setItemPrice("");
    setItemDate("");
    toast(`${itemName} eklendi. `);
  };

  const handleDelete = (product) => {
    setItems(items.filter((item) => item.id !== product.id));

    toast(`${product.itemName} silindi.`);
  };

  const total = items.reduce(function (acc, currentItem) {
    return acc + parseInt(currentItem.itemPrice);
  }, 0);

  const balance = budgetAmount - total;

  return (
    <>
      <ToastContainer />
      <div className=" flex h-5/6 ">
        <div className="bg-[#1f2937] w-2/4  pt-4 text-white px-5 ">
          <h1 className=" text-5xl font-bold mt-16 ">Simplified Budget</h1>
          <div className="w-3/4">
            <input
              type="number"
              placeholder="Budget Amount"
              className="rounded-md px-4 py-3 bg-[#4b5563] mt-20 w-full "
              onChange={(e) => setBudgetAmount(e.target.value)}
              value={budgetAmount}
            />
            <form className="flex justify-between items-center gap-4 mt-16 ">
              <input
                type="text"
                placeholder="Expense"
                className=" rounded-md w-32 px-4 py-3 bg-[#4b5563] text-white"
                onChange={(e) => setItemName(e.target.value)}
                value={itemName}
              />

              <input
                type="number"
                placeholder="Amount"
                className=" rounded-md w-32 px-4 py-3 bg-[#4b5563]"
                onChange={(e) => setItemPrice(e.target.value)}
                value={itemPrice}
              />

              <input
                type="date"
                placeholder="Date"
                className="rounded-md w-32 px-4 py-3 bg-[#4b5563]"
                onChange={(e) => setItemDate(e.target.value)}
                value={itemDate}
              />
              <AddIcon
                className="text-[#facc15] w-10 h-10"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
        <div className=" bg-[#000] w-2/4  text-white px-16  ">
          <h1 className="text-[#facc15] text-3xl mt-28">Expenses</h1>
          <ul>
            {items.map((item) => (
              <li
                className="flex justify-between mt-16 border-b"
                key={item.id}
                item={item}
              >
                <p>{item.itemName}</p>
                <div>{item.itemPrice}</div>
                <span>{item.itemDate}</span>
                <DeleteIcon onClick={() => handleDelete(item)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center px-10 py-8 border-y-2 border-black bg-white">
        <div>
          <h3 className="text-xl font-bold">Income</h3>
          <span className="text-3xl font-bold">{budgetAmount || 0}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold">Expenses</h3>
          <span className="text-3xl font-bold">{total}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold">Balance</h3>
          <span
            className={`text-3xl font-bold ${balance < 0 && "text-red-500"}`}
          >
            {balance || 0}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
