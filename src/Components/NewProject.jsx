import Input from "./Input"
import { useRef } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux"
import { addProject, selectedProjectValue } from "./Slices/ProjectsSlice";

export default function NewProject(){

    
    const dispatch = useDispatch();

    const addProjects = (data) => {
        dispatch(addProject(data));
    }
    const handleSelectedValue = () => {
        dispatch(selectedProjectValue(undefined))
    }


    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const date = useRef();

function handleSave(){

const enteredTitle = title.current.value;
const enteredDescription = description.current.value;
const enteredDate = date.current.value;

if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDate.trim() === ""){
    modal.current.open();
    return;
}

addProjects({
    title: enteredTitle, description: enteredDescription, date: enteredDate, id: Math.random()
})

handleSelectedValue();
}
// mejorar el mensaje de error del modal

    return ( 
    <>
        <Modal ref={modal} btn={"Close"}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
            <p className="text-stone-600 mb-4">Please made sure you provided a valid value for all the inputs</p>
        </Modal>
        <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={handleSelectedValue}  className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                 <Input ref={title} label="Title"/>
                 <Input ref={description} label="Description" isTextarea/>
                 <Input type="date" ref={date} label="Due Date"/>
                </div>
        </div>
    </>
            );

}