import React from "react";
import EventCard from "./EventCard";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const EventListing = () => {
    return (
        <div>
            <Header />
            <h1 className="flex items-center justify-center h-10">List of current Events😁</h1>
            <div className="cardListing">
                <EventCard title={"Tejas N"} description={"Im a man"} />
                <EventCard title={"Shujaath khan"} description={"he is women"} />
                <EventCard title={"Chess Game"} description={"Chess Game is wonderful game"} />
                <EventCard title={"Tic tac tao"} description={"Tic tac tao is wonderful game"} />
                <EventCard title={"Dice roll"} description={"dice roll is wonderful game"} />
                <EventCard title={"luck game"} description={"luck game is wonderful game"} />
                <EventCard title={"ludo game"} description={"ludo game is wonderful game"} />
            </div>
            <Footer />
        </div>
    );
};

export default EventListing;