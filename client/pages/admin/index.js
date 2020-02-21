import Layout from '../../components/layout';
import Link from 'next/link';
import {isAuth} from '../../actions/auth'
import Admin from '../../components/auth/admin'
import {useEffect} from 'react';
const adminIndex = () => {
    return (
        <Layout>
            <Admin>            <h2>adminIndex page</h2>
            <Link href="/signup">
                <a>Signup</a>
            </Link>
            </Admin>

        </Layout>
    );
};

export default adminIndex;

