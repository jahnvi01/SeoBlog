import Layout from '../../components/layout';
import Link from 'next/link';
import Private from '../../components/auth/private'

const userIndex = () => {

    return (
        <Layout>
        
            <h2>userIndex page</h2>
            <Link href="/signup">
                <a>Signup</a>
            </Link>
          
        </Layout>
    );
};

export default userIndex;

