import React, { useState, useEffect } from 'react';
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Importando SemanticUI
import { Form, Card, Icon } from 'semantic-ui-react'



const Search = () => {
    // Definindo os paramentos a ser puxado pela API com useState

    const [name, setName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [since, setSince] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);

    // Puxando dados pela API com useEffect

    useEffect(() => {
        fetch("https://api.github.com/users/juliocacko")
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }, []);

    const setData = async ({ name, login, followers, following, repos, created_at }) => {
        setName(name);
        setFollowers(followers);
        setFollowing(following)
        setRepos(repos);
        setSince(created_at);
    };

    const handleSearch = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
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
            <div className="user-detail">

                <Card>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Membro desde  </span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {followers} followers / {following} followers /
                    </a>
                    </Card.Content>
                </Card>
            </div >
        </div>
    );
};

export default Search;