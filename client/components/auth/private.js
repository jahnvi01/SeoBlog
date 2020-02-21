import {useEffect} from 'react';
import Router from 'next/router';
import {isAuth} from '../../actions/auth';

const Private=({children})=>{
useEffect(()=>{
if(!isAuth){
    Router.push('/signin');
}
},[]);
return (<React.fragment>
    {children}
</React.fragment>)
}

export default Private;