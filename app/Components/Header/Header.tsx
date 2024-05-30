import Image from 'next/image';
import './Header.css';

const links = [
    {url: '#Doação', text: 'Doação'},
    {url: '#Localização', text: 'Localização'},
    {url: '#Atividades', text: 'Atividades'},
];

const Header = () => {
    const renderLinks = links.map((link, i) => (
        <li key={i}>
            <a href={link.url}>{link.text}</a>
        </li>
    ));

    return (        
        <div className="header">
            <Image src="/logo.jpg" alt='site-logo' width={115} height={115} className='logo' />
            <nav className="nav">
                <ul>{renderLinks}</ul>
            </nav>
        </div>    
    )
}

export default Header;