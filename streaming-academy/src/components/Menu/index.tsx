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

            case 'filmes':
                setMenuActive('filmes')
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
            {menuActive === 'home' ? 
                <Link className='navActive' to="/" onClick={ e => menuActivity('home')}>Home</Link>
                :
                <Link className='nav' to="/" onClick={ e => menuActivity('home')}>Home</Link>
            }

            {menuActive === 'filmes' ? 
                <Link className='navActive' to="/filmes" onClick={ e => menuActivity('filmes')}>Filmes</Link>
                : 
                <Link className='nav' to="/filmes" onClick={ e => menuActivity('filmes')}>Filmes</Link>
            } 

            {menuActive === 'series' ? 
                <Link className='navActive'to="/series" onClick={ e => menuActivity('series')}>Series</Link>
                :
                <Link className='nav'to="/series" onClick={ e => menuActivity('series')}>Series</Link>
            }

            {menuActive === 'contatos' ? 
                <Link className='navActive' to="/contato" onClick={ e => menuActivity('contatos')}>Contatos</Link>
                :
                <Link className='nav' to="/contato" onClick={ e => menuActivity('contatos')}>Contatos</Link>
            }
        </nav>
    </div>
  
    )
}