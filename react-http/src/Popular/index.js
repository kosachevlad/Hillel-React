import { useState, useEffect } from "react";
import { fetchPopularRepos } from "../api";
import SelectedLanguage from "./SelectedLanguage";
import Repos from "./Repos";
import Preloader from "./Preloader";

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("language") || "All";
  });
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => setRepos(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    const params = new URLSearchParams({ language: selectedLanguage });
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [selectedLanguage]);

  if (error) {
    return "Error";
  }

  return (
    <div>
      {loading && <Preloader />}
      {!loading && (
        <>
          <SelectedLanguage
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <Repos repos={repos} />
        </>
      )}
    </div>
  );
};

export default Popular;


