import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // let myStyle = {
    //     color: "red",
    //     fontSize: "42px",
    //     textTransform: "uppercase",
    // };

    let myStyle = {};
    // <header className="header">
    return <h1 style={myStyle}>Fast React Pizza Co.</h1>;
    // </header>;
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = []
    const numbPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our menu</h2>

            {numbPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            <Pizza pizzaObject={pizza} key={pizza.name} />
                        ))}
                        {/* this one to works  */}
                        {/* {pizzaData.map((pizza) => ( <Pizza name={pizza.name} Pizza photoName = {pizza.photoName}/>
                ))} */}
                    </ul>
                </>
            ) : (
                <p> we're still working on our menu, please come back later</p>
            )}
            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomatom, Mozarella, Spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />
            <Pizza
                name="Focaccia"
                ingredients="Bread with italian olive oil and rosemary"
                price={6}
                photoName="pizzas/focaccia.jpg"
            /> */}
        </main>
    );
}

function Pizza({ pizzaObject }) {
    return (
        <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObject.photoName} alt="pizzas spinacis" />
            <div>
                <h3>{pizzaObject.name}</h3> <p>{pizzaObject.ingredients}</p>
                <span>
                    {pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}
                </span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    // if (hour >= openHour && hour <= closeHour) alert("We're currently Open");
    // else {
    //     alert("We're currently close");
    // }

    return (
        <footer>
            <footer className="footer">
                {isOpen ? (
                    <Order closeHouse={closeHour} />
                ) : (
                    <p>we are Opening soon</p>
                )}
            </footer>
        </footer>
    );
    //React.createElement("Footer", null, "We are currently Open");
}

function Order(props) {
    return (
        <div className="order">
            <p>
                We're open till {props.closeHour}:00. Come visit us or other
                online
            </p>
            <button className="btn">order</button>
        </div>
    );
}

// this how we render react 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
