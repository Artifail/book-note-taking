import '../../css/UI/loadAlert.css'
import loadFile from '../../resources/img/loading.png'
import arrow from '../../resources/img/arrow.png'

const LoadAlert = () => {
    return (
        <div className='loadAlertBlock'>
            <img  className='arrowImg' src={arrow} alt='Load...'></img>
            <span className='alertMessage'>Upload your file</span>
            <div className='loadArea'>
               <img className='loadImg' src={loadFile} alt='Load...'></img>
            </div>
            
        </div>
    );
}

export default LoadAlert;