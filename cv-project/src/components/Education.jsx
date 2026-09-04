import { useState } from 'react';

export default function Education() {
    const [isEditing, isSetEditing] = useState(true);
    const [info, setInfo] = useState({
        school:'',
        title:'',
        date:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    if(isEditing) {
        return (
            <form onSubmit={handleSubmit} className="section-container">
                <h2>Educational Experience</h2>
                <input
                    type="text" name="school" value={info.school}
                    onChange={handleChange} placeholder="School Name" required
                />
                <input
                    type="text" name="title" value={info.title}
                    onChange={handleChange} placeholder="Title of Study" required 
                />
                <input
                    type="text" name="date" value={info.date}
                    onChange={handleChange} placeholder="Date of Study" required 
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

    return(
        <div className="section-container">
            <h2>Educational Experience</h2>
            <p><strong>School:</strong>{info.title}</p>
            <p><strong>Title of Study:</strong>{info.title}</p>
            <p><strong>Date:</strong>{info.date}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    );
}