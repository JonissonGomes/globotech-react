export const Footer = () => {

    let socialMedia = [
        {
            linkImage: 'https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg',
            linkSite: 'https://www.facebook.com/',
            nameSocialNetwork: 'Facebook/Meta',
            alternativeText: 'ícone do Facebook'
        }
    ]

    return (
        <div>
            <h1>Footer</h1>
                <div className='redes-sociais'>
                    <div>
                        <img src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" width='60px' alt=''/>
                    </div>

                    {socialMedia.map(social => (
                        <div>
                        <a href={social.linkSite} target="_blank" rel="noreferrer">
                            <img src={social.linkImage} alt={social.alternativeText}/>
                            <h3>{social.nameSocialNetwork}</h3> 
                        </a>
                        </div>
                    ))}


                    {/* <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img src="img/facebook.png" alt="ícone do Facebook" />
                        <h3>Facebook</h3>
                    </a>
                    <a href="https://github.com/JonissonGomes/globotech-react" target="_blank" rel="noreferrer">
                        <img src="img/github.png" alt="ícone do Github" />
                        <h3>Github</h3>
                    </a>
                    <a href="https://www.linkedin.com/company/globo/" target="_blank" rel="noreferrer">
                        <img src="img/in.png" alt="ícone do linkedin" />
                        <h3>Linkedin</h3>
                    </a> */}
                </div>
        </div>
    )
}