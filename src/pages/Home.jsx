import { Announcement } from '../components/Announcement'
import { Menu } from '../components/Menu'
import { Nav } from '../components/Nav'
import { Slider } from '../components/Slider'

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Menu/>
            <Nav/>
            <Slider/>
        </div>
    )
}
