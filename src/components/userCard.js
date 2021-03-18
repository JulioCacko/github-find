import React from "react";
// Importando SemanticUI
import { Card, Icon } from 'semantic-ui-react'


const userCard = ({ data, repositories, }) => {


    return (
        <div className="userCard">
            <Card>
                <Card.Content>
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Membro desde  </span>
                    </Card.Meta>
                    <Card.Description>
                        <p>{data.bio}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {data.followers} followers / {data.following} followers /
                </a>
                </Card.Content>
            </Card>
        </div >

    )
};

export default userCard;