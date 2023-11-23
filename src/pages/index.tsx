import Dashboard from "./main/dashboard";
import { NextRouter, useRouter } from "next/router";

const IndexPage = (): void => {
    const router: NextRouter = useRouter();

    if (typeof window !== "undefined") {
        const user: string | null = localStorage.getItem("user");

        if (user) router.push("/main/dashboard");
        // else router.push("/home/registration");
        else router.push("/home/login");
    }
};

export default IndexPage;
