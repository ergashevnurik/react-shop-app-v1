import Navbar from '../components/Navbar';
import ShopComponent from '../components/Shop'
import Sidebar from '../components/Sidebar';
import React, {useState} from 'react'

function Shop() {

    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
        setisOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <ShopComponent />
        </>
    )
}

export default Shop;