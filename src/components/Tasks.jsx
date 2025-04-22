function Tasks(props){
    console.log(props)
    return (
        <ul className="space-y-4 p-6 bg-slate-400 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key="task.id" className="flex" >
                    <button className="bg-slate-400 w-full text-white p-2 rounded-md ">
                        {task.title}
                    </button>
                    <button className="bg-slate-400 text-white p-2 rounded-md ">
                        Details
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks