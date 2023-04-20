import {useState} from "react";

const PlayerInput = ({id, onSubmit, label}) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.status === 404) {
                setError('User not found');
                return;
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred');
            return;
        }

        onSubmit(id, username);
    }

    return (
        <form className='column' onSubmit={handleSubmit}>
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