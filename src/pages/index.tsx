// import Link from "next/link";
// import Layout from "../components/Layout";

// const IndexPage = () => (
//     <Layout title="Home | Next.js + TypeScript Example">
//         <Link href="/about">About</Link>
//         <br />
//     </Layout>
// );

// export default IndexPage;

import Login from "./home/login";
import Dashboard from "./main/dashboard";
import { useRouter } from "next/router";

const IndexPage = () => {
    const router = useRouter();

    if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");

        if (user) router.push("/main/dashboard");
        else router.push("/home/login");
    }

    return "";
};

export default IndexPage;
