import React, {useEffect, useState} from "react";
import Movie from "../../components/Movie";

const API_KEY = '0cfb2866bc0135b94e1b5b4517ba1fd4';
const API_BASE= 'https://api.themoviedb.org/3'


const basicFetch = async (endpoint: string) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
    
}

const getHomeList = async () => {
    return[
        {
            slug: 'treanding',
            title: 'Recomendados',
            items: await basicFetch (`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

        }
    ] 
    
}

export const Movies = () => {

    const [list, setList] = useState<any[]>([])

    const loadAll = async () => {
        let list = await getHomeList();
        setList(list)
    }

    useEffect(() => {
        loadAll();
    } , []);


    return (

         <div className="page">
             <section className="lists">
                    {list.map((item, key) => (
                    <div>
                       <Movie key={key} title= {item.title} items= {item.items}/>
                    </div>))}
            </section>
         </div>

    
    
    )
}