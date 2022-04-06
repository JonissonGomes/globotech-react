import { useState } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export const Menu = () => {

    const [ menuActive, setMenuActive ] = useState('home')

    const menuActivity = (menuActive: String) => {
        const itemActive = menuActive.toLowerCase()
        switch (itemActive) {
            case 'home':
                setMenuActive('home')
                break;

            case 'movies':
                setMenuActive('movies')
                break;

            case 'series':
                setMenuActive('series')
            break;

            case 'contatos':
                setMenuActive('contatos')
                break;
        }
    }

    return (
    <div className='container'>
        <a href="/" className={'logoContainer'}>
            <img className={'logoImage'} src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" width='60px' alt=''/>
            <h2 className={'titleLogo'}>Straming Dock</h2>
        </a>
        <nav className='menu-nav'>
                <Link className={menuActive === 'home' ? 'navActive' : 'nav'} to="/" onClick={ e => menuActivity('home')}>Home</Link>   
                
                <Link className={menuActive=== 'movies' ? 'navActive' :'nav'} to="/movies" onClick={ e => menuActivity('movies')}>Filmes</Link>
               
                <Link className={menuActive=== 'series' ? 'navActive' :'nav'}to="/series" onClick={ e => menuActivity('series')}>Series</Link>
            
                <Link className={menuActive==='contatos' ? 'navActive' :'nav'} to="/contatos" onClick={ e => menuActivity('contatos')}>Contatos</Link>
                
        </nav>
    </div>
  
    )
}