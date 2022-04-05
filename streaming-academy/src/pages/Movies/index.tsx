const API_KEY = '0cfb2866bc0135b94e1b5b4517ba1fd4';
const API_BASE= 'https://api.themoviedb.org/3'


const basicFetch =async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
    
}

export const Movies = () => {

    getHomeList:async () => {
        return[
            {
                slug: 'treanding'
                title: 'Recomendados'
                itens await basicFetch (`/treanding/all/week?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'toprated'
                title: 'Em Alta'
                itens await basicFetch (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

            }
        ]
        

        
        
    }



    return (
    <>
    <h1>Filmes</h1>
    </>
    )
}