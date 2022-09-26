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
					<div key={id} className='w-10/12 flex flex-col items-center my-3 bg-slate-100 rounded-lg py-2 hover:bg-slate-200 '>
						<ul><li className='font-bold text-slate-400'>{title} {id}</li></ul>
                    </div>
                       
				);
    })

    return (
            <div className='w-full flex flex-col items-center mt-10'>
                
                    {songList}

                    {showForm ? (
                        <div className='p-2 ml-5 mt-10'>
                            <form onSubmit={handleSubmit}>
                            <div className='flex justify-center'>
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

                    <div className='absolute flex justify-center ml-28 inset-x-0 bottom-36'>
                        <button
                            onClick={handleClick}
                            className='w-52 text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-4 py-1 mr-5'>
                            Add Song
                        </button>
                    </div>
            </div>
		);

}

export default SongList;