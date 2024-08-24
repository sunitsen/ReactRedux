import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import getAllTodos from './actions/todosAction';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const TodosView = () => {
    // Access todos state correctly
    const { todos, isLoading, error } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <Container className="my-4 py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <h1 className='text-center mb-4'>Todos Data Fetch Using React Redux</h1>
            {isLoading && <Spinner animation="border" variant="primary" />}
            {error && <Alert variant="danger">Error: {error}</Alert>}
            <Row>
                {todos.map(todo => (
                    <Col xs={12} sm={6} md={4} lg={3} key={todo.id} className="mb-4">
                        <Card
                            style={{
                                minHeight: '150px',
                                maxHeight: '250px',
                                overflow: 'auto',
                            }}
                        >
                            <Card.Body>
                                <Card.Title>Todo ID: {todo.id}</Card.Title>
                                <Card.Text>{todo.title}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TodosView;
