import {Link} from 'react-router-dom'
import './index.css'

export const Menu = () => {
    return (
    <div className='container'>
        <a href="/" className={'logoContainer'}>
            <img className={'logoImage'} src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" width='60px' alt=''/>
            <h2 className={'titleLogo'}>Straming Dock</h2>
        </a>
        <nav className='menu-nav'>
        <Link className='nav' to="/">Home</Link>
        <Link className='nav' to="/filmes">Filmes</Link>
        <Link className='nav'to="/series">Series</Link>
        <Link className='nav' to="/contato">Contatos</Link>
        </nav>
    </div>
  
    )
}