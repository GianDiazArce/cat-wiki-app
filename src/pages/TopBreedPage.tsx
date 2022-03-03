import { useEffect, useState } from "react";
import { Breed } from "../interfaces/interfaces";
import { apiCatWiki } from "../api/catApi";
import { useLoading } from "../router/CatRouter";
import "../css/topBreedPage.css";
import { Link } from "react-router-dom";

export const TopBreedPage = () => {
    const [breeds, setBreeds] = useState<Breed[]>([]);
    const { isLoading, setIsLoading } = useLoading();

    useEffect(() => {
        setIsLoading(true);
        apiCatWiki
            .get(`https://api-wiki-cat.herokuapp.com/api/cats/breeds/top`)
            .then((resp) => {
                setBreeds(resp.data.breeds);
                setIsLoading(false);
            })
            .catch(console.log);
    }, [setIsLoading]);

    if (isLoading === true || breeds.length < 0) {
        return (
            <div>
                <h3>Cargando....</h3>
            </div>
        );
    } else {
        return (
            <div className="breedTop__container">
                {breeds.length > 1 && (
                    <>
                        <h2 className="breedTop__title">
                            Top 10 most searched breeds
                        </h2>
                        <div className="breedTop__cards">
                            {breeds.map((breed, index) => (
                                <div key={index} className="breedTop__card">
                                    <figure className="breedTop__figure">
                                        <img
                                            src={breed.image?.url}
                                            alt={breed.name}
                                            className="breedTop__img"
                                        />
                                    </figure>
                                    <div className="breedTop__texts">
                                        <Link
                                            to={`/breed/${breed.name.toLowerCase()}`}
                                        >
                                            <h3 className="breedTop__name">
                                                {index + 1 + ".  " + breed.name}
                                            </h3>
                                        </Link>
                                        <p className="paragraph">
                                            {breed.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        );
    }
};
