import Layout from '../components/layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <h2>Index page</h2>
            <Link href="/signup">
                <a>Signup</a>
            </Link>
        </Layout>
    );
};

export default Index;

// import Layout from '../components/layout.js';

// const Index=()=>{
//     return (
//         <Layout>
//             <h2>Januuuu</h2>
//             <a href="/signup">Signup</a>
//             <a href="/signin">Signin</a>
//         </Layout>
//     )
// }
// export default Index;