const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLanguage = ({selectedLanguage, setSelectedLanguage, disabled}) => {
    return (
        <ul className='languages'>
            {languages.map((language, index) => {
                return (
                    <li
                        key={index}
                        style={{color: language === selectedLanguage ? '#d0021b' : '#000000'}}
                        onClick={() => {
                            if (!disabled) {
                                setSelectedLanguage(language);
                            }
                        }}
                    >
                        {language}
                    </li>
                )
            })}
        </ul>
    )
}

export default SelectedLanguage;