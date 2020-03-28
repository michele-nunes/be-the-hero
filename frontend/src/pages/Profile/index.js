import React, { useState }  from 'react';
import { Link} from 'react-router-dom';

import api from '../../services/api';


import logoImg from '../../assets/logo.svg';


import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useEffect } from 'react';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('onId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
           headers: {
               Authorization: ongId,
           } 
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                  <span>Bem vinda,{ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>

                
            </header>

            <h1>Cados cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASO:</strong>
                     <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{incident.value}</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );

}