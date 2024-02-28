function LineBreak(){
    return(
        <div className="line-break"></div>
    )
}

function Profile({data}){
    return(
        <div className="profile">
            <div className="name">{data.name}</div>
            <div className="email">{data.email}</div>
            <div className="phone">{data.phone}</div>
        </div>
    )
}

function Education({data}){
    return(
        <>
            <h2>EDUCATION</h2>
            <LineBreak />
            {data.education.map((education, index) => (
                <div key={education.id} className="education">
                    <div className="line">
                        <div className="institution">{education.institution}</div>
                        <div className="graduation">{education.graduation}</div>
                    </div>
                    <div className="title">{education.title}</div>
                    {/* <ul>
                        {data.education[0].details.map((detail, index) =>
                            <li key={`0${index}`}>{detail}</li>
                        )}
                    </ul> */}
                    <ul>
                        <li>{education.details}</li>
                    </ul>
                </div>


            ))}
        </>
    )
}

function Company({data}){
    return(
        <>
            <h2>COMPANY</h2>
            <LineBreak />
            {data.experience.map((exp, index) => (
                <div className="experience">
                    <div className="line">
                        <div className="company">{exp.company}</div>
                        <div className="duration">{exp.duration}</div>
                    </div>
                    
                    <div className="job">{exp.job}</div>
                    <div className="details">{exp.details}</div>
                </div>
            ))}
        </>
    )
}

function Skills({data}){
    return(
        <>
            <h2>SKILLS</h2>
            <LineBreak />
            {data.skills}
        </>
    )
}

export default function Cv({data}){
    return(
        <div className="cv">
            <Profile data={data}/>
            <LineBreak/>
            <Education data={data}/>
            <Company data={data} />
            <Skills data={data}/>
        </div>
    )
}
