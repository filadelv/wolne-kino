import { register } from 'swiper/element/bundle';
import Card from '../components/Card';
import Search from '../components/Search';
import { For, Show, createResource } from 'solid-js';
import formatDate from '../utils/formatDate';
register();

import jebanyapikey from '../../jebanyapikey';

const fetchPopular = async (type) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${jebanyapikey}`
        }
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=pl-PL`, options);

      return res.json();

}



export default () => {

    const [movies] = createResource(() => fetchPopular('movie'));
    const [tvshows] = createResource(() => fetchPopular('tv'));

    return (
        <>

        <div className="header font-bold text-4xl p-20 font-mono text-center">
            <h1 className='text-center'>Wolność filmowa przeciwko</h1>
            <h1 className='text-center'>korporacyjnej kontrolii kinematografii</h1>
        </div>

        <Search/>
        
        <div className="container max-w-screen-xl m-auto">

        

        <h1 className='p-8 font-bold text-3xl'>Popularne filmy</h1>
        <Show when={movies()} fallback={<p>Ładowanie...</p>}>
            <swiper-container slides-per-view="7" space-between="20" navigation="true" >
                <For each={movies().results}>
                    {(movie) => (
                        <swiper-slide>
                        <Card
                        type='filmy'
                        overview={movie.overview}
                        id={movie.id}
                        title={movie.title} 
                        poster_path={movie.poster_path} 
                        release_date={formatDate(movie.release_date)} 
                        vote_average={movie.vote_average}
                        vote_count={movie.vote_count}
                        original_title={movie.original_title}
                        lazy="true"
                        /><div class="swiper-lazy-preloader"></div></swiper-slide>
                    )}
                </For>
            </swiper-container>  
        </Show>
        
        <h1 className='p-8 font-bold text-3xl'>Popularne seriale</h1>
        <Show when={tvshows()} fallback={<p>Ładowanie...</p>}>
            <swiper-container slides-per-view="7" space-between="20" navigation="true">
                <For each={tvshows().results}>
                    {(tvshow) => (
                        <swiper-slide>
                        <Card
                        type='seriale'
                        overview={tvshow.overview}
                        id={tvshow.id}
                        title={tvshow.name} 
                        poster_path={tvshow.poster_path} 
                        release_date={formatDate(tvshow.first_air_date)} 
                        vote_average={tvshow.vote_average}
                        vote_count={tvshow.vote_count}
                        original_title={tvshow.original_name}
                        lazy='true'
                        /><div class="swiper-lazy-preloader"></div></swiper-slide>
                    )}
                </For>
            </swiper-container>  
        </Show>

        </div>

        </>
    )
}