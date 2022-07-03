import { React, useState}  from 'react';
import uniqid from 'uniqid';
import ExperienceSection from './Experience.tsx';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

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
    onFullNameChange: () => void,
    onLocationChange: () => void, 
    onJobTitleChange: () => void, 
    onBioChange: () => void, 
    onPhoneChange: () => void, 
    onWebsiteChange: () => void, 
    onEmailChange: () => void,
    onMajorChange: () => void, 
    onUniversityChange: () => void, 
    onUniversityStartChange: () => void, 
    onUniversityEndChange: () => void, 
    onSkillsChange: () => void,
    onExperiencesChange: () => void,
    onReset: () => void,
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
    onFullNameChange,
    onLocationChange, 
    onJobTitleChange, 
    onBioChange, 
    onPhoneChange, 
    onWebsiteChange, 
    onEmailChange,
    onMajorChange, 
    onUniversityChange, 
    onUniversityStartChange, 
    onUniversityEndChange, 
    onSkillsChange,
    onExperiencesChange,
    onReset,
}) => {
    function addSkill(e) {
        e.preventDefault();
        // for initializion
        if (skills[0] === 'AutoCAD') {
            onSkillsChange([currentSkill]);
        } else {
            onSkillsChange(skills.concat([currentSkill]));
        }
        setCurrentSkill('');
    }

    function handleExperienceChange(experience, index) {
        const experiencesCopy = experiences.slice();
        experiencesCopy.splice(index, 1, experience);
        onExperiencesChange(experiencesCopy);
    }

    function printPDF (e) {
        e.preventDefault();
        const input = document.getElementById('resume-a4');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const width = pdf.internal.pageSize.getWidth();
                const height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                pdf.save('resume.pdf');
            })
    }

    function resetPage (e) {
        e.preventDefault();
        onReset();
    }

    const [currentSkill, setCurrentSkill] = useState('');

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
                        <input id='full-name' onChange={onFullNameChange} />
                    </label>
                    <label htmlFor='location'>
                        Location * <br />
                        <input id='location' onChange={onLocationChange} />
                    </label>
                    <label htmlFor='job-title'>
                        Job Title * <br />
                        <input id='job-title' onChange={onJobTitleChange} />
                    </label>
                    <label htmlFor='bio'>
                        Bio <br />
                        <textarea id='bio' onChange = {onBioChange} />
                    </label>
                </section>
                 <section>
                    <h2>CONTACT</h2>
                    <label htmlFor='phone'>
                        Phone * <br />
                        <input id='phone' onChange = {onPhoneChange} />
                    </label>
                    <label htmlFor='website'>
                        Website <br />
                        <input id='website' onChange = {onWebsiteChange}/>
                    </label>
                    <label htmlFor='email'>
                        E-mail * <br />
                        <input id='email' onChange={onEmailChange} />
                    </label>
                </section>
                <section>
                    <h2>EDUCATION</h2>
                    <label htmlFor='major'>
                        Major <br />
                        <input id='major' onChange={onMajorChange} />
                    </label>
                    <label htmlFor='university'>
                        University <br />
                        <input id='university' onChange={onUniversityChange} />
                    </label>
                    <div id='university-start-end' className='date-start-end'>
                        <label
                            htmlFor='university-start'
                            className='start-label'>
                            University Start <br />
                            <input 
                                id='university-start'
                                type='date'
                                onChange={onUniversityStartChange} />
                        </label>
                        <label 
                            htmlFor='university-end'
                            className='end-label'>
                            University End <br />
                            <input 
                                id='university-end'
                                type='date'
                                onChange={onUniversityEndChange}/>
                        </label>
                    </div>
                </section>
                <section>
                    <h2>SKILLS</h2>
                        <label htmlFor='skill'>
                            Skills <br />
                            <input 
                                id='skill'
                                value={currentSkill}
                                onChange={(e) => setCurrentSkill(e.target.value)}/>
                            <button 
                                id='add-skill' 
                                className='add-button'
                                onClick={addSkill}>
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
                    <ExperienceSection 
                        componentTitle='EXPERIENCE #1'
                        experience={experiences[0]}
                        onExperienceChange={(experience) => 
                            handleExperienceChange(experience, 0)}
                        />
                    <ExperienceSection 
                        componentTitle='EXPERIENCE #2'
                        experience={experiences[1]} 
                        onExperienceChange={(experience) =>
                            handleExperienceChange(experience, 1)}
                        />
                     <ExperienceSection 
                        componentTitle='EXPERIENCE #3'
                        experience={experiences[2]} 
                        onExperienceChange={(experience) =>
                            handleExperienceChange(experience, 2)}
                        />
               </section>
                <div id='buttons-container'>
                    <button id='button-generate-pdf' onClick={printPDF}>
                        GENERATE PDF
                    </button>
                    <button id='reset' onClick={resetPage}>
                        RESET
                    </button>
                </div>
            </form>
        </div>
    );
}


export { Form, Props, Experience };
