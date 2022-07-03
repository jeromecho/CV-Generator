import React, { useState } from 'react';
import { Experience, Form } from './Form.tsx';
import Resume from './Resume.tsx';

const Main: React.FunctionComponent<Props> = () => {
    const initialFullName = 'John Park';
    const initialLocation = 'Menlo Park, CA';
    const initialJobTitle = 'Mechatronics Engineer';
    const initialBio = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. 
        `;
    const initialPhone = '604 890 9981';
    const initialWebsite = 'www.johnparkmakes.xyz';
    const initialEmail = 'johnpark1997@gmail.com';
    const initialMajor = `BSc. Computer Science and 
        Physics (Honors)`;
    const initialUniversity = `University of British 
        Columbia`;
    const initialUniversityStart = '2021';
    const initialUniversityEnd = '2026';
    const initialSkills = [
        'AutoCAD',
        'Embedded Systems',
        'PCBs',
        'PyTorch',
        'Tensorflow',
        'SOLID',
        'C++',
        'Python',
        'JavaScript',
        'Tehcnical Leadership',
    ];
    const initialExperiences = [
        {
            title: 'Neuroengineer',
            company: 'Neuralink',
            startDate: '2024',
            endDate: 'Present',
            synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation`,
            duties: [
                'Published 96 papers on unsupervised learning',
                'Led team to smashing victory in 2024 OpenAI World Algo Challenge',
            ],
        },
        {
            title: 'Machine Learning Engineer',
            company: 'Nuro',
            startDate: '2023',
            endDate: '2023',
            synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation`,
            duties: [
                'Spearheaded AGILE to deploy blockchain based self-driving car',
                'Singlehandedly migrated entire codebase from Angular to React',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'Google',
            startDate: '2022',
            endDate: '2022',
            synopsis: `Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation`,
            duties: [
                'Implemented machine learning and blockchain',
                'Led the Google D O G initiative - garnering 1,000,000 USD',
                'First in cohort of 50000 in unique, prestigious, xylophone internship',
            ],
        },
    ];

    const [fullName, setFullName] = useState<string>(initialFullName.slice());
    const [location, setLocation] = useState<string>(initialLocation.slice());
    const [jobTitle, setJobTitle] = useState<string>(initialJobTitle.slice());
    const [bio, setBio] = useState<string>(initialBio.slice());
    const [phone, setPhone] = useState<string>(initialPhone.slice());
    const [website, setWebsite] = useState<string>(initialWebsite.slice());
    const [email, setEmail] = useState<string>(initialEmail.slice());
    const [major, setMajor] = useState<string>(initialMajor.slice());
    const [university, setUniversity] = useState<string>(initialUniversity.slice());
    const [universityStart, setUniversityStart] = useState<string>(initialUniversityStart.slice());
    const [universityEnd, setUniversityEnd] = useState<string>(initialUniversityEnd.slice());
    const [skills, setSkills] = useState<string[]>(initialSkills.slice());
    const [experiences, setExperiences] = useState<Array<Experience>>(initialExperiences.slice());

    function handleReset() {
        setFullName(initialFullName.slice());
        setLocation(initialLocation.slice());
        setJobTitle(initialJobTitle.slice());
        setBio(initialBio.slice());
        setPhone(initialPhone.slice());
        setWebsite(initialWebsite.slice());
        setEmail(initialEmail.slice());
        setMajor(initialMajor.slice());
        setUniversity(initialUniversity.slice());
        setUniversityStart(initialUniversityStart.slice());
        setUniversityEnd(initialUniversityEnd.slice());
        setSkills(initialSkills.slice());
        setExperiences(initialExperiences.slice());
    }

    return (
        <main>
            <Form 
                fullName = {fullName}
                location = {location}
                jobTitle = {jobTitle}
                bio = {bio}
                phone = {phone}
                website = {website}
                email = {email}
                major = {major}
                university = {university}
                universityStart = {universityStart}
                universityEnd = {universityEnd}
                skills = {skills}
                experiences = {experiences}
                onFullNameChange={(e) => setFullName(e.target.value)}
                onLocationChange={(e) => setLocation(e.target.value)} 
                onJobTitleChange = {(e) => setJobTitle(e.target.value)}
                onBioChange = {(e) => setBio(e.target.value)}
                onPhoneChange = {(e) => setPhone(e.target.value)}
                onWebsiteChange = {(e) => setWebsite(e.target.value)}
                onEmailChange = {(e) => setEmail(e.target.value)}
                onMajorChange = {(e) => setMajor(e.target.value)}
                onUniversityChange = {(e) => setUniversity(e.target.value)}
                onUniversityStartChange = {(e) => setUniversityStart(e.target.value)}
                onUniversityEndChange = {(e) => setUniversityEnd(e.target.value)}
                onSkillsChange = {(newSkills) => setSkills(newSkills)}
                onExperiencesChange = {(newExperiences) => setExperiences(newExperiences)}
                onReset = {handleReset}
            />
            <Resume 
                fullName = {fullName}
                location = {location}
                jobTitle = {jobTitle}
                bio = {bio}
                phone = {phone}
                website = {website}
                email = {email}
                major = {major}
                university = {university}
                universityStart = {universityStart}
                universityEnd = {universityEnd}
                skills = {skills}
                experiences = {experiences}
            />
        </main>
    );
}

export default Main;
