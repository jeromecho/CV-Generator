import React from 'react';
import { Props } from './Form.tsx';
import PROFILEPIC from '../img/man-korean.jpeg';
import LOCATIONICON from '../img/logo-location.png';
import EMAILICON from '../img/logo-email.webp';
import PHONEICON from '../img/logo-phone.png';
import WEBSITEICON from '../img/logo-website.png';
import uniqid from 'uniqid';

const Resume: React.FunctionComponent<Props> = ({
    fullName,
    location, 
    jobTitle,
    bio,
    phone,
    website,
    email,
    major,
    university,
    universityStart,
    universityEnd,
    skills,
    experiences,
}) => {

    return (
        <div id='resume-a4'> 
            <div id='resume-left'>
                <div className='top'>
                    <div id='top-margin'>
                        <div className='bar'>
                            <img src={LOCATIONICON} />
                        </div>
                        <p>{location}</p>
                    </div>
                    <div id='name-job-title'>
                        <div id='name-job-container'>
                            <h1>{fullName.toUpperCase()}</h1>
                            <div id='job-title-container'>
                                <div className='bar'></div>
                                <p>{jobTitle.toUpperCase()}</p>
                            </div>
                        </div>
                   </div>
                </div>
                <div id='education' className='left-info-div'>
                    <div className='left-info-container'>
                        <h3>EDUCATION</h3>
                        <div className='bar'></div>
                        <p>{major}</p>
                        <p>{university.toUpperCase()}</p>
                        <p id='university-start-end-dates'>
                            {`${universityStart.slice(0,4)} - ${universityEnd.slice(0,4)}`}
                        </p>
                    </div>
               </div>
               <div id='skills' className='left-info-div'>
                   <div className='left-info-container'>
                       <h3>SKILLS</h3>
                       <div className='bar'></div>
                       <ul id='skills-resume'>
                           {
                               skills.map(skill => (
                                   <li key={uniqid()}>
                                       {skill}
                                   </li>
                               ))
                           }
                       </ul>
                   </div>
               </div>
            </div>
            <div id='resume-right'>
                <div className='top'>
                    <img src={PROFILEPIC} alt='profile-pic' />
                    <div id='contact-info'>
                        <div className='contact-item' id='email-item'>
                            <img src={EMAILICON} />
                            <p>{email}</p>
                        </div>
                        <div className='contact-item' id='phone-item'>
                            <img src={PHONEICON} />
                            <p>{`+1 ${phone}`}</p>
                        </div>
                        <div className='contact-item' id='website-item'>
                            <img src={WEBSITEICON} />
                            <p>{website}</p>
                        </div>
                    </div>
                </div>
                <div id='profile' className='right-info-div'>
                    <div className='right-info-container'>
                        <h2>PROFILE</h2>
                        <div className='bar'></div>
                        <p>{bio}</p>
                    </div>
               </div>
                <div id='experience' className='right-info-div'>
                    <div className='right-info-container'>
                        <h2>EXPERIENCE</h2>
                        <div className='bar'></div>
                {experiences.map(({
                    title, 
                    company,
                    startDate,
                    endDate,
                    synopsis,
                    duties,
                }) => (
                    <div className='experience-resume'>
                        <h4>{title.toUpperCase()}</h4>
                        <div className='company-info-resume'>
                            <h4>{company.toUpperCase()}</h4>
                            <div className='bar'></div>
                            <h4>
                                {startDate}
                                <span className='to'>
                                    {' to '}
                                </span>
                                {endDate}
                            </h4>
                        </div>
                        <p>{synopsis}</p>
                        <ul>
                        {duties.map(duty => (
                        <li key={uniqid()}>{duty}</li>
                        ))}
                        </ul>
                    </div>
                )
                )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
