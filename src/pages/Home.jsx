import { Announcement } from '../components/Announcement'
import { Menu } from '../components/Menu'
import { Nav } from '../components/Nav'
import { NewArrivals } from '../components/NewArrivals'
import { Popular } from '../components/Popular'
import { Product } from '../components/Product'
import { Slider } from '../components/Slider'
import { Notification } from '../components/Notification'
import { FooterMenu } from '../components/FooterMenu'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Menu/>
            <Nav/>
            <Slider/>
            <Product/>
            <Popular/>
            <NewArrivals/>
            <Notification/>
            <FooterMenu/>
            <Footer/>
        </div>
    )
}
