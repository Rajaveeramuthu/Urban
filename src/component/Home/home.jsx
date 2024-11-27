import React from "react";
import Homeimage from "../../assets/wallpaper.gif";

function Homepage() {
    return (
        <div
            className="w-full h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${Homeimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className=" pt-10 text-6xl font-bold ">Urban Maintenance Notifier</h1>
            <div className="flex justify-center pt-96">
                <button className="h-20 rounded-lg bg-pink-200 "><a href="/contactus" className=" px-3 py-2 border-solid  rounded-md text-2xl font-medium hover:bg-pink-200">Contact Us</a></button>
            </div>

        </div>
    );
}

export default Homepage;

