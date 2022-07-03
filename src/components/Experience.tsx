import { React, useState, useEffect } from 'react';
import uniqid from 'uniqid';
import { Experience } from  './Form.tsx';

interface Props {
    title: string;
    experience: Experience;
}

const ExperienceSection: React.FunctionComponent<Props> = ({
    componentTitle, 
    experience,
    onExperienceChange
}) => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [duties, setDuties] = useState([]);
    const [currentDuty, setCurrentDuty] = useState('');

    useEffect(() => {
        onExperienceChange({
            title, 
            company, 
            startDate,
            endDate,
            synopsis, 
            duties
        });
    }, [
        title, 
        company, 
        startDate, 
        endDate,
        synopsis, 
        duties, 
        currentDuty
    ]);

    const titleHandler = (e) => {
        setTitle(e.target.value);
   };

    const companyHandler = (e) => {
        setCompany(e.target.value);
   };

    const startDateHandler = (e) => {
        setStartDate(e.target.value);
   };

    const endDateHandler = (e) => {
        setEndDate(e.target.value);
    };

    const synopsisHandler = (e) => {
        setSynopsis(e.target.value);
    };

    const dutiesHandler = (e) => {
        e.preventDefault();
        setDuties(duties.concat([currentDuty]));
        setCurrentDuty('');
    };

    const currentDutyHandler = (e) => {
        setCurrentDuty(e.target.value);
    };

    return (
        <>
            <h2>{componentTitle}</h2>
            <label htmlFor='title'>
                Title <br />
                <input className='title' onChange={titleHandler}/>
            </label>
            <label htmlFor='company'>
                Company <br />
                <input className='company' onChange={companyHandler} />
            </label>
            <div className='company-start-end' className='date-start-end'>
                <label htmlFor='start-date' className='start-label'>
                    Start Date <br />
                    <input 
                        className='start-date'
                        id='start-date'
                        type='date' 
                        onChange={startDateHandler} />
                </label>
                <label htmlFor='end-date' className='end-label'>
                    End Date <br />
                    <input 
                        className='end-start'
                        id='end-date'
                        type='date' 
                        onChange={endDateHandler}
                    />
                </label>
            </div>
            <label htmlFor='synopsis'>
                Synopsis <br />
                <input className='synopsis' onChange={synopsisHandler}/>
            </label>
            <label htmlFor='duty'>
                Duties <br />
                <input className='duty' onChange={currentDutyHandler}/>
                <button 
                    className='add-duty' 
                    className='add-button'
                    onClick={dutiesHandler}
                >
                    Add Duty
                </button>
            </label>
            <ul className='duties-display'>
                {
                    experience.duties.map(duty => (
                        <li className='duty-banner' key={uniqid()}>
                            {duty}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default ExperienceSection;
