import { useState } from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo() {
    const [isEditing, setIsEditing] = useState (true);
    const [info, setInfo] = useState({
        name:'',
        email:'',
        phone:''
    });
    
}
