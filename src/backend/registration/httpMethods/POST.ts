import { NextApiRequest, NextApiResponse } from "next";

export function POST(req: NextApiRequest, res: NextApiResponse) {
    const path = require("path");
    const fs = require("fs");
    fs.writeFile("test.json", req.body);

    // const users = localStorage.getItem("USERS");
    // console.log("users before ::: ", users);
    // users = users ? JSON.parse(localStorage.getItem("USERS")) : {};
    // console.log("users ::: ", users);
    // const data = JSON.parse(req.body);
    // console.log("data ::: ", data);
    // users[data.email] = data;
    // console.log("users input ::: ", users);
    // localStorage.setItem("USERS", users);
    res.status(200).json({ res: "success" });
}
