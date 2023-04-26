import {useState} from "react";
import { useDispatch } from "react-redux";
import { fetchBattleData } from "../redux/battle/battle.thunk";

const PlayerInput = ({id, label}) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username) {
          const data = {
            [`${id}Name`]: username,
            [`${id}Image`]: `https://github.com/${username}.png?size200`,
            username,
          };
          dispatch(fetchBattleData(data));
        }
      };
    
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