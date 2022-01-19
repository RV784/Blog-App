import BlogButton from "./BlogButton";

export default function Navbar({setOpen}){
    return(
        <div className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-2xl">Blog App</h1>
      <div>
        <BlogButton title = "Create" clik={setOpen}/>
      </div>
    </div>
    );
}