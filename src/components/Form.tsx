import React from 'react';
import uniqid from 'uniqid';

interface Props {
    fullName: string;
    location: string; 
    jobTitle: string;
    bio: string;
    phone: string;
    website: string;
    email: string;
    major: string;
    university: string;
    universityStart: string;
    universityEnd: string;
    skills: string[];
    experiences: Array<Experience>;
}

interface Experience {
    title: string; 
    company: string;
    startDate: string;
    endDate: string;
    synopsis: string;
    duties: string[];
}

const Form: React.FunctionComponent<Props> = ({
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
        <div id='form-container'>
            <div id='form-top'>
                <div id='form-top-margin'>
                    <div className='bar'>
                    </div>
                </div>
                <div id='form-top-title-info-container'>
                    <h1>CRAFT YOUR RESUME</h1>
                    <div className='bar'>
                    </div>
                    <p>Fields with an * are required</p>
                </div>
            </div>
            <form>
                <section>
                    <h2>PROFILE</h2>
                    <label htmlFor='full-name'>
                        Full Name * <br />
                        <input id='full-name' />
                    </label>
                    <label htmlFor='location'>
                        Location * <br />
                        <input id='location' />
                    </label>
                    <label htmlFor='job-title'>
                        Job Title * <br />
                        <input id='job-title' />
                    </label>
                    <label htmlFor='bio'>
                        Bio <br />
                        <input id='bio' />
                    </label>
                </section>
                 <section>
                    <h2>CONTACT</h2>
                    <label htmlFor='phone'>
                        Phone * <br />
                        <input id='phone' />
                    </label>
                    <label htmlFor='website'>
                        Website <br />
                        <input id='website' />
                    </label>
                    <label htmlFor='email'>
                        E-mail * <br />
                        <input id='email' />
                    </label>
                </section>
                <section>
                    <h2>EDUCATION</h2>
                    <label htmlFor='major'>
                        Major <br />
                        <input id='major' />
                    </label>
                    <label htmlFor='university'>
                        University <br />
                        <input id='university' />
                    </label>
                    <div id='university-start-end' className='date-start-end'>
                        <label
                            htmlFor='university-start'
                            className='start-label'>
                            University Start <br />
                            <input id='university-start' type='date' />
                        </label>
                        <label 
                            htmlFor='university-end'
                            className='end-label'>
                            University End <br />
                            <input id='university-end' type='date' />
                        </label>
                    </div>
                </section>
                <section>
                    <h2>SKILLS</h2>
                        <label htmlFor='skill'>
                            Skills <br />
                            <input id='skill'/>
                            <button id='add-skill' className='add-button'>
                                Add Skill
                            </button>
                        </label>
                        <ul id='skills-display'>
                            {
                                skills.map(skill => (
                                    <li className='skill-banner' key={uniqid()}>
                                        <p>{skill}</p>
                                    </li>))
                            }
                        </ul>
                </section>
                <section>
                    <h2>EXPERIENCES</h2>
                    <label htmlFor='title'>
                        Title <br />
                        <input id='title' />
                    </label>
                    <label htmlFor='company'>
                        Company <br />
                        <input id='company' />
                    </label>
                    <div id='company-start-end' className='date-start-end'>
                        <label htmlFor='start-date' className='start-label'>
                            Start Date <br />
                            <input id='start-date' type='date' />
                        </label>
                        <label htmlFor='end-start' className='end-label'>
                            End Date <br />
                            <input id='end-start' type='date' />
                        </label>
                    </div>
                    <label htmlFor='synopsis'>
                        Synopsis <br />
                        <input id='synopsis' />
                    </label>
                    <label htmlFor='duty'>
                        Duties <br />
                        <input id='duty'/>
                        <button id='add-duty' className='add-button'>
                            Add Duty
                        </button>
                    </label>
                    <ul id='duties-display'>
                        {
                            /* Current experience.map - TODO */
                            experiences.map(experience => (
                                experience.duties.map(duty => (
                                    <li className='duty-banner' key={uniqid()}>
                                        {duty}
                                    </li>
                                ))))
                        }
                    </ul>
                </section>
                <div id='buttons-container'>
                    <button id='button-generate-pdf'>
                        GENERATE PDF
                    </button>
                    <button id='reset'>
                        RESET
                    </button>
                </div>
            </form>
        </div>
    );
}


export { Form, Props, Experience };
