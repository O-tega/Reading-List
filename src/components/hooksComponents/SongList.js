import React, {useState} from 'react'


const SongList =()=>{

    // const [newSong, setNewSong] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [songs, setSong] = useState([
        {id: 1, title: 'Almost home' },
        {id: 2, title: 'This wild darkness' },
        {id: 3, title: 'Memory gospel' },
    ])

    const handleClick=()=>{
        setShowForm(true)
    }
    // const handleChange=(e)=>{
    //     setNewSong(e.value.target)
    // }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const count = songs.length
        console.log(e)
        setSong([...songs, {title:e.target.value, id: count +1 }])
        setShowForm(false)
    }

    const songList = songs.map(({title, id})=>{
        return (
					<div key={id}>
						<ul>{title}</ul>
                    </div>
                       
				);
    })

    return (
			<div>
				{songList}

				{showForm ? (
					<div className='w-52 p-2'>
						<form onSubmit={handleSubmit}>
                        <div className='flex'>
                            <input
                                type='text'
                                placeholder='Add a new song'
                                className='border border-slate-300 w-96 rounded-lg pl-3 mr-1'
                            />
                            <button
                                className=' text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-4 py-1 mr-5'>
                                Add
                            </button>
                        </div>
						</form>
					</div>
				) : null}

				<button
					onClick={handleClick}
					className='w-52 text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-4 py-1 mr-5'>
					Add Song
				</button>
			</div>
		);

}

export default SongList;