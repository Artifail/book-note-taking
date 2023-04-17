import '../css/header.css'
import app_icon from '../resources/img/book_icon.png'

const Header = () => {
        return (
            <div className='header'>
                <img className='app_icon' src={app_icon} alt='Load...'/>
                <header className='app_name'>Book-note-taking</header>
                <button className='upload_book'>Upload Book</button>
            </div>
        );
}
export default Header;