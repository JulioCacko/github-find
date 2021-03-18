import React, { useState } from "react";
// Importando Components
import userCard from "./userCard";
// Importando SemanticUI
import { Form } from 'semantic-ui-react'



const Search = () => {
    // Definindo os paramentos a ser puxado pela API com useState

    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);;



    const handleSearch = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();


        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();

        if (profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
        }

    };

    return (
        <div className="search">
            <Form >
                <Form.Group>
                    <Form.Input
                        placeholder='Pesquisar usuário'
                        name='github user'
                        onChange={handleSearch}
                    />
                    <Form.Button content='Pesquisar'
                        onClick={handleSubmit} />
                </Form.Group>
            </Form>
            <userCard data={data} repositories={repositories} />
        </div>
    );
};

export default Search;