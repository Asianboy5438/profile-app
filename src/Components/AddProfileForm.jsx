import { useState } from "react"

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");


const AddProfileForm = ({onAddProfile}) => {

    const [values, setValues] = useState({name: "", title: "", email: "", bio:"", image: null})
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const {name, title, email, bio, image} = values

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true)
        try{
        if(!stripTags(trimCollapse(name)) 
        || !stripTags(trimCollapse(title)) 
        || !trimCollapse(bio)
        || !stripTags(trimCollapse(email))){
            setError("Please fill in name, title, email, and description")
            return;
        }
        const cleanedData = {
            id: Date.now(),
            name: stripTags(trimCollapse(name)),
            title: stripTags(trimCollapse(title)),
            email: stripTags(trimCollapse(email)),
            bio: trimCollapse(bio),
            image: URL.createObjectURL(image)
        }
        onAddProfile(cleanedData)

        setValues({name: "", title: "", email: "", bio:"", image: null})
        setError("")
        setSuccess("Form is submitted successfully")
        setTimeout(()=>{
            setSuccess("")
        },1000)

        }catch(error){
            setError(error.message)
        }finally{
            setIsSubmitting(false)
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target
        if ( name === "image"){
            const file = event.target.files[0]
            if(file && file.size < 1024 * 1024){
                setValues(pre => ({...pre, image:file}))
                setError("")
            }else{
                setError("Image should be less than 1 MB")
                setValues(pre => ({...pre, image:null}))
            }
        }
        setValues(pre => ({...pre, [name]: value}))
    }
    const disabled = !stripTags(trimCollapse(name)) 
    || !stripTags(trimCollapse(title)) 
    || !stripTags(trimCollapse(bio)) 
    || !stripTags(trimCollapse(email))
    || !isSubmitting
    || error;

    return(

        <form onSubmit={handleSubmit} className="">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required value={name} onChange={handleChange}></input>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" required value={title} onChange={handleChange}></input>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={email} onChange={handleChange}></input>
            <label htmlFor="bio">Add Description</label>
            <textarea id="bio" name="bio" required value={bio} maxLength={200} onChange={handleChange}></textarea>
            <label htmlFor="image">Upload an Image</label>
            <input id="image" name="image" type="file" accept="image/*" onChange={handleChange}></input>

            <button disabled = {disabled}>Submit</button>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
        </form>
    )

}

export default AddProfileForm