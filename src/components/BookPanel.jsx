import '../css/bookPanel.css'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdf_file from '../resources/rgz_bos.pdf'
import { useState } from 'react';
import LoadAlert from './UI/LoadAlert';


/*
    BookPanel - 

*/
const BookPanel = () => {
        const [pdfOobject, setPdfObject] = useState(1); //если не null отобразить 
        
        return (
            <div className='bookpanel'>
                {pdfOobject === null ? <LoadAlert/> : <Viewer  fileUrl={pdf_file} />}
            </div>
        );
}

export default BookPanel;