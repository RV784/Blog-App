
import { useState } from "react";
import BlogButton from "./BlogButton";

export default function BlogForm({setClose}){
    const initialState = {
        title: "",
        message: "",
    };

    const[formData, setFormData] = useState(initialState);
    const handleSubmit = (e) => {
        e.preventDefault();

       setClose();
    };

    return(
        <div>
            <form onSubmit = {handleSubmit} className="flex flex-col space-y-4">
                <input type = "text" placeholder="Title" className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md" value = {formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value})}></input>
                <input type = "text" placeholder="Title" className="p-4" className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md" value = {formData.message} onChange={(e) => setFormData({ ...formData, title: e.target.value})}></input>
                <BlogButton title="Publish"/>
            </form>
        </div>
    );
}