import React from "react";
// Importando SemanticUI
import { Card, Icon } from 'semantic-ui-react'


const Detail = ({ data, repositories }) => {
    return (
        <div>
            <Card>
                <Card.Content>
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Description>
                        {data.bio}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    {data.followers} followers / {data.following} followers
                </Card.Content>
            </Card>
        </div>
    )
};

export default Detail;




