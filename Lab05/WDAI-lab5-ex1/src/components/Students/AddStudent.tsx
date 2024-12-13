import {useEffect, useState} from "react";

export interface formData {
    firstname: string;
    lastname: string;
    year: number;
}


export default function AddStudent({addStudent, hook}: { addStudent: (student: formData) => void , hook: number}) {
    const [formData, setFormData] = useState<formData>({
        firstname: '',
        lastname: '',
        year: 0
    });

    useEffect(() => {
        setFormData({firstname: '', lastname: '', year: 0})
    }, [hook]);


    const handleFormChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        if (name === 'year') {
            setFormData({...formData, [name]: parseInt(value)})
            console.log(formData)
            return
        }
        setFormData({...formData, [name]: value})

    }

    const handleSubmit = () => {
        addStudent(formData)
    }

    return (
        <div>
            <form style={{display: "flex", flexDirection: 'column', maxWidth: '30%'}} onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <label htmlFor={'firstname'}>Firstname: </label>
                <input
                    type={"text"}
                    name={'firstname'}
                    onChange={handleFormChange}
                    value={formData.firstname || ''}
                    id={"firstname"}
                />
                <label htmlFor={'lastname'}>Lastname: </label>
                <input
                    type={"text"}
                    name={'lastname'}
                    onChange={handleFormChange}
                    value={formData.lastname || ''}
                    id={"lastname"}
                />
                <label htmlFor={'year'}>Year: </label>
                <input
                    type={"number"}
                    name={'year'}
                    onChange={handleFormChange}
                    value={formData.year || 0}
                    id={"year"}/>
                <button>Add Student</button>
            </form>
        </div>
    )
}