import React, { useState } from 'react';
import { Experience, Form } from './Form.tsx';
import Resume from './Resume.tsx';

const Main: React.FunctionComponent<Props> = () => {
    const [fullName, setFullname] = useState<string>('John Park');
    const [location, setLocation] = useState<string>('Menlo Park, CA');
    const [jobTitle, setJobTitle] = useState<string>('Mechatronics Engineer');
    const [bio, setBio] = useState<string>(`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. 
        `);
    const [phone, setPhone] = useState<string>('604 890 9981');
    const [website, setWebsite] = useState<string>('www.johnparkmakes.xyz');
    const [email, setEmail] = useState<string>('johnpark1997@gmail.com');
    const [major, setMajor] = useState<string>(`BSc. Computer Science and 
        Physics (Honors)`);
    const [university, setUniversity] = useState<string>(`University of British 
        Columbia`);
    const [universityStart, setUniversityStart] = useState<string>('2021');
    const [universityEnd, setUniversityEnd] = useState<string>('2026');
    const [skills, setSkills] = useState<string[]>([
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
    ]);
    const [experiences, setExperiences] = useState<Array<Experience>>([
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
    ]);

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
