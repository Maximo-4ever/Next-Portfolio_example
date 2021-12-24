import Link from "next/link"
import Layout from "../components/Layout"

const Custom404 = () => {
    return (
        <Layout>
            <h1>This page does not exist. Please return to <Link href="/">Home</Link></h1>
        </Layout>
    )
}

export default Custom404
