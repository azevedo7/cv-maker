import { v4 as uuid } from 'uuid';

import { useState } from 'react'
import Input from "./Input"

function Profile({ changeRootData }){
    return(
        <div className="profile">
            <Input 
                label={'Name: '}
                onChange={(e) => changeRootData(e, 'name')}
            />
            <Input 
                label={'Email: '}
                onChange={(e) => changeRootData(e, 'email')}
            />
            <Input 
                label={'Phone Number: '}
                onChange={(e) => changeRootData(e, 'phone')}
            />
        </div>
    ) 
}

function Education({ changeData, addInstitution, data }){
    return(
        <>
            <h4>Education</h4>
            {data.education.map((edu, index) => (
                <div key={edu.id} className="education">
                    <Input
                        label={'Institution: '}
                        onChange={(e) => changeData(e, 'institution', index) }
                    />
                    <Input
                        label={'Title: '}
                        onChange={(e) => changeData(e, 'title', index) }
                    />
                    <Input 
                        label={'Graduation (Month, Year): '}
                        onChange={(e) => changeData(e, 'graduation', index)}
                    />
                    <Input
                        label={'Details: '}
                        onChange={(e) => changeData(e, 'details', index)}
                    />
                    
                </div>
            ))}
            <button onClick={addInstitution}>Add institution</button>
        </>
    )
}

function Company({ changeData, addCompany, data}){
    return(
        <>
            <h4>Work Experience</h4>
            {data.experience.map((company, index) => (
                <div key={company.id} className='company'>
                    <Input
                        label={'Company name: '}
                        onChange={(e) => changeData(e, 'company', index)}
                    />
                    <Input
                        label={'Job: '}
                        onChange={(e) => changeData(e, 'job', index)}
                    />
                    <Input
                        label={'Duration: '}
                        onChange={(e) => changeData(e, 'duration', index)}
                    />
                    <Input
                        label={'Details: '}
                        onChange={(e) => changeData(e, 'details', index)}
                    />

                </div>
            ))}
            <button onClick={addCompany}>Add experience</button>
        </>
    )
}

function Skills({setData}) {
    return(
        <>
            <textarea id="skills" name="skills" rows="5" cols="33"
                onChange={(e) => setData(e, 'skills')}>
            </textarea>
        </>
    )
}


export default function Data({data, setData}){
    const [education, setEducation] = useState(data.education)
    const [experience, setExperience] = useState(data.experience)

    const changeRootData = (e, type) => {
        setData({...data, [type]: e.target.value})
    }

    // Education functions
    const changeEducation = (e, type, index) =>{
        let temp = education;
        temp[index][type] = e.target.value;
        pushEducation(temp);
        console.log(data)
    }

    const addInstitution = () => {
        let temp = education;
        temp.push({id: uuid()})
        pushEducation(temp);

    }

    const pushEducation = (temp) => {
        setEducation(temp);
        setData({...data, education: education})
    } 

    // Experience functions
    const changeExperience = (e, type, index) =>{
        let temp = experience;
        temp[index][type] = e.target.value;
        pushExperience(temp);
        console.log(data)
    }

    const addExperience = () => {
        let temp = experience;
        temp.push({id: uuid()})
        pushExperience(temp);

    }

    const pushExperience = (temp) => {
        setExperience(temp);
        setData({...data, experience: experience})
    } 

    const addDetail = () => {

    }

    return(
        <div className="data">
            <Profile changeRootData={changeRootData} />
            <Education changeData={changeEducation}
                addInstitution={addInstitution}
                data={data}
            />
            <Company
                changeData={changeExperience}
                addCompany={addExperience}
                data={data}
            />
            <Skills 
                setData={changeRootData}
            />

        </div>
    )
}