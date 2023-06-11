
import Hero from '../components/hero/Hero';
import Movies from '../components/movies/Movies';
import News from '../components/news/News';

const Homepage = ({ scroll_to_contact }) => {
    return (
        <div className="app__home">
            <Hero />
            <News 
                scroll_to_contact={scroll_to_contact}
            />
            <Movies />
        </div>
    )
}

export default Homepage;