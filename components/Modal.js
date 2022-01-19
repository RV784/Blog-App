import BlogForm from "./blogform";

export default function Modal({setClose}){

    return(
        <>

         <div className="fixed inset-0 bg-black opacity-50 h-full w-full"></div>
         <div className="relative top-60 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white z-10">
          <BlogForm setClose={setClose}/>
         </div>
        </>
    );
}