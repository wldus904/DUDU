import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <Link href="/about">About</Link>
    </Layout>
);

export default IndexPage;
