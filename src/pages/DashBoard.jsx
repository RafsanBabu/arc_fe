import axios from 'axios';
import React, { useState } from 'react'

function DashBoard() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value =event.target.type == 'file' ? event.target.files[0]: event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    console.log(inputs);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title",inputs.title);
        formData.append("description",inputs.description);
        formData.append("image",inputs.image);
        axios.post('http://localhost:5000/blogs', formData)
            .then(res => {
              
                if (res.data.status == 'success') {
                    alert('Something went right while creating account')
    } else {
            alert('Something went wrong while creating account')
}
 })
      }

return (
    <form onSubmit={handleSubmit}>
        <label>Enter title:
            <input
                type="text"
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
            />
        </label>
        <label>Enter description:
            <textarea
                rows={6}
                //type="text"
                name="description"
                value={inputs.description || ""}
                onChange={handleChange}
            />
        </label>
        <label>Select image:
            <input
                type="file"
                name="image"
                // value={inputs.image || ""}
                onChange={handleChange}
            />
        </label>
        <input type="submit" />
    </form>
)
}

export default DashBoard