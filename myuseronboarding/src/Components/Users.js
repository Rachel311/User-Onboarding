// import react from 'react';
import { Card } from 'react-bootstrap';



export default function Users(props){
    return(
        <div>
            {props.Users.map(user =>{
                return(
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>{user.first_name}{user.last_name}</Card.Title>
                            <Card.Text>
                                {user.email}
                            </Card.Text>
                            <Card.Text>
                                {user.title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}