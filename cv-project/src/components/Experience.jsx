import { useState }from 'react';

export default function Experience() {
    const[isEditing, setIsEditing] = useState(true);
    const[nfo, setInfo] = useState({
        company: '',
        position: '',
        responsibilities: '',
        from: '',
        until: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info,[name]: value }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    }

    if(isEditing) {
        return (
            <form onSubmit={handleSubmit} className="section-container">
                <h2>Practical Experience</h2>
                <p><strong>Company:</strong> {info.company} </p>
                <p><strong>Position:</strong>{info.position}</p>
                <p><strong>Responsibilities:</strong>{info.responsibilities}</p>
                <p><strong>From:</strong>{info.from} <strong>- Until:</strong>{info.until}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </form>
        );
}