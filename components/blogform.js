
import BlogButton from "./BlogButton";

export default function BlogForm({setClose}){

    const handleSubmit = (e) => {
        e.preventDefault();

       setClose();
    };

    return(
        <div>
            <form onSubmit = {handleSubmit} className="flex flex-col space-y-4">
                <input type = "text" placeholder="Title" className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"></input>
                <input type = "text" placeholder="Title" className="p-4" className="p-4 focus:outline-none focus:ring-green-500 focus:ring-1 rounded-md"></input>
                <BlogButton title="Publish"/>
            </form>
        </div>
    );
}