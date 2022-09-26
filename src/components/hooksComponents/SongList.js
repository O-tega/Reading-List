import React, {useState} from 'react'


const SongList =()=>{

    const [newSong, setNewSong] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [songs, setSong] = useState([
        {id: 1, title: 'Almost home' },
        {id: 2, title: 'This wild darkness' },
        {id: 3, title: 'Memory gospel' },
    ])

    const handleClick=()=>{
        setShowForm(true)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const count = songs.length
        setSong([...songs, {title:newSong, id: count +1 }])
        setShowForm(false)
    }

    const songList = songs.map(({title, id})=>{
        return (
					<div key={id} className='flex flex-col items-center my-5'>
						<ul>{title} {id}</ul>
                    </div>
                       
				);
    })

    return (
            <div className='flex justify-center mt-10'>
                <div>
                    {songList}

                    {showForm ? (
                        <div className=' p-2'>
                            <form onSubmit={handleSubmit}>
                            <div className='flex'>
                                <input
                                    onChange={(e)=>setNewSong(e.target.value)}
                                    type='text'
                                    placeholder='Add a new song'
                                    className='border border-slate-300 w-52 rounded-lg pl-3 mr-1'
                                />
                                <button
                                    className=' text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-4 py-1 mr-5'>
                                    Add
                                </button>
                            </div>
                            </form>
                        </div>
                    ) : null}

                    <div className='flex justify-center absolute inset-x-0 bottom-10'>
                        <button
                            onClick={handleClick}
                            className='w-52 text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-4 py-1 mr-5'>
                            Add Song
                        </button>
                    </div>
                </div>
            </div>
		);

}

export default SongList;