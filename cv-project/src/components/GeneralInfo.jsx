import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState (true);
    const [info, setInfo] = useState({
        name:'',
        email:'',
        phone:''
    });
    
    const handleChange = (e) => {
        const { name, value} = e.target;
        setInfo({...info, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    if(isEnding) {
        return (
            <form onSubmit = {handleSubmit} className="section-container">
                <h2>General Information</h2>
                <input 
                    type="text" name="name" value={info.name}
                    onChange={handleChange} placeHolder="Full Name" required
                />
                <input
                    type="tel" name="email" value={info.email}
                    onChange={handleChange} placeHolder="Email" required
                />
                <input
                    type="tel" name="phone" value={info.phone}
                    onChange={handleChange} placeHolder="Phone Number" required
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

    return (
        <div className="section-container">
            <h2>General Information</h2>
            <p><strong>Name:</strong>{info.name}</p>
            <p><strong>Email:</strong>{info.email}</p>
            <p><strong>Phone:</strong>{info.phone}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    );
}
