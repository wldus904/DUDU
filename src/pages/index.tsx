import Dashboard from "./main/dashboard";
import { useRouter } from "next/router";

const IndexPage = () => {
    const router = useRouter();

    if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");

        if (user) router.push("/main/dashboard");
        else router.push("/home/join");
        // else router.push("/home/login");
    }

    return "";
};

export default IndexPage;
