import { Announcement } from '../components/Announcement'
import { Menu } from '../components/Menu'
import { Nav } from '../components/Nav'
import { Popular } from '../components/Popular'
import { Product } from '../components/Product'
import { Slider } from '../components/Slider'

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Menu/>
            <Nav/>
            <Slider/>
            <Product/>
            <Popular/>
        </div>
    )
}
