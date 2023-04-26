import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRepos } from "../redux/popular/popular.thunk";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLanguage = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage);

    useEffect(() => {
        dispatch(getRepos(selectedLanguage));
    }, []);

    return (
        <ul className='languages'>
            {languages.map((language, index) => {
                return (
                    <li
                        key={index}
                        style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                        onClick={() => dispatch(getRepos(language))}
                    >
                        {language}
                    </li>
                )
            })}
        </ul>
    )
}

export default SelectedLanguage;