import Footer from './Footer';
import './Home.css'
function Home (){
    return(
        <div className='home'>
            <h1>Book Search</h1>
        
            <input
            placeholder="Search for books"
            className='w-3/4 px-4 pt-2 pb-2 border rounded-md border-brown-600 text-brown-800 focus:outline-none'
            />
            
            <select className='p-2 border rounded-md border-brown-600 text-brown-800 focus:outline-none mt-4'>
                <option value="">All Subjects</option>
                <option value="">Fiction</option>
                <option value="">Non Fiction</option>
                <option value="">Mystery</option>
                <option value="">Sci-fi</option>
                <option value="">Fantasy</option>

            </select>
            
            <button>Search</button>
            <Footer/>
        </div>
        
    )
}
export default Home;