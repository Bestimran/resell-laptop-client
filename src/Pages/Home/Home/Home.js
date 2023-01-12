import React from 'react';
import { useContext } from 'react';
import Loading from '../../../Components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Categories from '../Categories/Categories';
import HeroArea from '../HeroArea/HeroArea';


const Home = () => {
    const {loading} = useContext(AuthContext)
    return (
        <div>
           { loading ? <Loading></Loading> :
          <>
              <HeroArea/>
            <Categories></Categories>
            <AdvertiseProduct></AdvertiseProduct>
          </>
           }
        </div>
    );
};

export default Home;