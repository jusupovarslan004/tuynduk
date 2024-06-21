import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSecurityServers } from '../../redux/SecurityServersReducer/securityServersReducer.js';
import TitlePages from '../../components/TitlePages/TitlePages.jsx';
import './NewParticipants.css';
import {Link} from "react-router-dom";

const NewParticipants = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.securityServers.data);

    useEffect(() => {
        dispatch(fetchSecurityServers());
    }, [dispatch]);

    const getClassUserStyle = (classUser) => {
        if (classUser === 'GOV') {
            return { backgroundColor: 'rgb(131, 221, 226)' };
        } else if (classUser === 'COM') {
            return { backgroundColor: 'rgb(156, 131, 226)' };
        }
        return {};
    };

    return (
        <div className='new_participants_main'>
            <TitlePages bigTitle='Информационная система "Каталог"' title_pages_text='Список участников' />
            <div className='new_participants_container_date'>
                <div className='participant_info_numbering_main'>
                    <div className='participant_info_numbering'>
                        <span>№</span>
                    </div>
                    <div className='new_participants_date_participant'>
                        {users?.map((item, index) => (
                            <span key={index}>{index}</span>
                        ))}
                    </div>
                </div>
                <div className='participant_info_numbering_main'>
                    <div className='participant_info_name'>
                        <span>Наименование</span>
                    </div>
                    <div id='new_participants_date_participant_text' className='new_participants_date_participant'>
                        {users?.map((item, index) => (
                            <span key={index}>
                                <Link to={`/participants/${item.id}`}>
                                    {item.title}
                                </Link>
                            </span>
                        ))}
                    </div>
                </div>
                <div className='participant_info_numbering_main'>
                    <div className='participant_info_class'>
                        <span>Класс участника</span>
                    </div>
                    <div className='new_participants_date_participant'>
                        {users?.map((item, index) => (
                            <span  className='new_participants_date_participant_text' key={index}
                                  style={getClassUserStyle(item.user.class_user)}>
                                {item.user.class_user}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='participant_info_numbering_main'>
                    <div className='participant_info_code'>
                        <span>Код участника</span>
                    </div>
                    <div>
                        <div className='new_participants_date_participant'>
                            {users?.map((item, index) => (
                                <span key={index}>{item.user.code_user}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='participant_info_numbering_main'>
                    <div className='participant_info_registration_date'>
                        <span>Дата регистрации</span>
                    </div>
                    <div id='new_participants_date_participant' className='new_participants_date_participant'>
                        {users?.map((item, index) => (
                            <span key={index}>{item.user.date_of_birth}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewParticipants;
