import React from "react";
import "./index.css";

export default ({title, items}: any) => {
    return (
        <div className="movie">
            <h2>{title}</h2>
            <div className="listarea">
                <div className="list">
                {items.results.length > 0 && items.results.map((items: any, key: any) => (
                    <div key= {key}className="item">
                    <img key={key} src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt={items.original_title} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}