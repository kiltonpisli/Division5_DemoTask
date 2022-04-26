import { useEffect, useState } from 'react'
import { Movie } from '../models/response.model';

const useInfiniteScrolling = (data: Movie[]|undefined, start: number, addBy: number) => {
    const [isLoading, setLoading] = useState(true);
    const [numberOfMovies, setNumberOfMovies] = useState(start);
    const [moviesToShow, setMoviesToShow] = useState<Movie[]>(data?.slice(0, numberOfMovies)!)
    
    const isScrolling = () => {
        if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight){
            return;
        }
        else {
            setNumberOfMovies(prev => prev+addBy);
        }
    };    

    useEffect(()=>{
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, []);

    useEffect(() => {
        setLoading(true);
    
        setMoviesToShow(data?.slice(0, numberOfMovies)!);
        console.log(moviesToShow)

        setLoading(false);
    }, [data, numberOfMovies]);

    return { moviesToShow, isLoading, isScrolling };
}

export default useInfiniteScrolling;