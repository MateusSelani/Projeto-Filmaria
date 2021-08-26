import {Link} from 'react-router-dom';

import './not-found.css';

export default function NotFound() {
    return(
        <div className="not=found">
            <h1>404</h1>
            <h2>Não Encontrado!</h2>
            <Link to="/">Veja nossos filmes aqui!</Link>
        </div>
    )
}