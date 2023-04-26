import {useState} from "react";

const PlayerInput = ({id, label, onSubmit}) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    
    return (
        <form className='column' onSubmit={(e) => onSubmit(e, id, username)}>
            <label className='header' htmlFor="username">{label}</label>
            <input 
                type="text" 
                id="username"
                placeholder='Github username'
                autoComplete='off'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <button 
                className='button' 
                type='submit'
                disabled={!username}
                >
                    Submit
            </button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PlayerInput;