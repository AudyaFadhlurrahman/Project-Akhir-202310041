import React from "react";
import { useState } from "react";

const FormMenu = (addToCart) => {
  const cardData = [
    {
      image: require("../../../../../images/ayamgoreng.jpeg"),
      title: "Ayam Goreng",
      stock: "10",
      harga: "Rp 8000",
    },
    {
      image: require("../../../../../images/tumiskangkung.jpg"),
      title: "Tumis Kangkung",
      stock: "10",
      harga: "Rp 4000",
    },
    {
      image: require("../../../../../images/sayurtahu.png"),
      title: "Sayur Tahu",
      stock: "10",
      harga: "Rp 2000",
    },
    {
      image: "/src/images/gambar1.jpg",
      title: "Menu 4",
      stock: "10",
      harga: "Rp 10000",
    },
    {
      image: "/src/images/gambar1.jpg",
      title: "Menu 5",
      stock: "10",
      harga: "Rp 10000",
    },
    {
      image: "/src/images/gambar1.jpg",
      title: "Menu 6",
      stock: "10",
      harga: "Rp 10000",
    },
  ];

  const [selectedItems, setSelectedItems] = useState(
    cardData.map((card) => ({
      ...card,
      count: 0,
    }))
  );

  const incrementCount = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems[index].count++;
    setSelectedItems(updatedItems);
  };

  const decrementCount = (index) => {
    const updatedItems = [...selectedItems];
    if (updatedItems[index].count > 0) {
      updatedItems[index].count--;
      setSelectedItems(updatedItems);
    }
  };

  // const handleAddToCart = () => {
  //   const filteredItems = selectedItems.filter((item) => item.count > 0);
  //   addToCart(filteredItems);
  // };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {selectedItems.map((item, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={item.image} className="card-img-top" alt="Card" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h5 className="card-title">{item.stock}</h5>
              <h5 className="card-title">{item.harga}</h5>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button className="btn btn-danger" onClick={() => decrementCount(index)} disabled={item.count === 0}>
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.count}</span>
                <button className="btn btn-primary" onClick={() => incrementCount(index)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="btn btn-primary" style={{ marginRight: "2rem" }}>
          Tambahkan ke Pemesanan
        </button>
      </div>
    </div>
  );
};

export default FormMenu;
