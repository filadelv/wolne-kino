import logo from '../assets/image.svg'
import { A } from "@solidjs/router";


export default () => {
    return (
        <nav className='flex items-center p-5 space-x-5 justify-between'>

            <div className='text-gray-900 text-2xl font-extrabold flex items-center'><img className='w-20' src={logo} alt="logo" /><p>Wolne kino</p></div>

            <ul className='flex space-x-4 font-sans font-medium'>
                <NavItem text="Strona główna" path="/" />
                <NavItem text="Filmy" path="/filmy" />
                <NavItem text="Seriale" path="/seriale" />
            </ul>

        </nav>
    );
};

const NavItem = (props) => {
    return (<li><A href={props.path}>{props.text}</A></li>)
}