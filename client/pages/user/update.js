import Layout from '../../components/layout';
import Private from '../../components/auth/private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Link from 'next/link';

const UserProfileUpdate = () => {
    return (
        <Layout>
         
                <div className="container-fluid">
                    <div className="row">
                        <ProfileUpdate />
                    </div>
                </div>
          
        </Layout>
    );
};

export default UserProfileUpdate;