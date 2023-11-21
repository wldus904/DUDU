import { NextApiRequest, NextApiResponse } from "next";
import { readAndWriteFile } from "@/utils/file";

export function POST(req: NextApiRequest, res: NextApiResponse) {
    const data = JSON.parse(req.body);
    // api 대신
    readAndWriteFile("user.json", (file) => {
        return { ...file, [data.email]: data } ?? { [data.email]: data };
    });
    res.status(200).json({ res: "success" });
    // res.status(400).json({ msg: "에러다" });
}
