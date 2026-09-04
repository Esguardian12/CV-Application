import { useState } from 'react';

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    until: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // If in editing mode, show the form with inputs
  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="section-container">
        <h2>Practical Experience</h2>
        <input 
          type="text" name="company" value={info.company} 
          onChange={handleChange} placeholder="Company Name" required 
        />
        <input 
          type="text" name="position" value={info.position} 
          onChange={handleChange} placeholder="Position Title" required 
        />
        <textarea 
          name="responsibilities" value={info.responsibilities} 
          onChange={handleChange} placeholder="Main Responsibilities" rows="3" required 
        />
        <input 
          type="text" name="from" value={info.from} 
          onChange={handleChange} placeholder="Date From" required 
        />
        <input 
          type="text" name="until" value={info.until} 
          onChange={handleChange} placeholder="Date Until" required 
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  // If not editing (submitted), show the static text
  return (
    <div className="section-container">
      <h2>Practical Experience</h2>
      <p><strong>Company:</strong> {info.company}</p>
      <p><strong>Position:</strong> {info.position}</p>
      <p><strong>Responsibilities:</strong> {info.responsibilities}</p>
      <p><strong>From:</strong> {info.from} <strong>- Until:</strong> {info.until}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}