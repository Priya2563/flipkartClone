import { useEffect } from 'react';
//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
const Component = styled(Box)`
padding: 10px;
background: #F2F2F2;
`
const Home = () => {
    const { products } = useSelector(state => state.getProducts);
   // console.log(products);
  //  console.disableYellowBox = true;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (  
        <>
            <NavBar />
            <Component> 
                <Banner />
                <MidSlide products={products} title="Deal of the day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discount for you" timer={false} />
                <Slide products={products} title="Suggesting Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommmended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's top Picks" timer={false} />
                <Slide products={products} title="Top Deals on Accessories" timer={false} />

            </Component> 
           
        </>
    )
}
export default Home;