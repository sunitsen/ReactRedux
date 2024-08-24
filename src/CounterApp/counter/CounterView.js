import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByFive } from './CounterSlice';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <Container
            className='text-center my-4'
            style={{
                backgroundColor: '#e9ecef', // Light gray background for the container
                padding: '2rem',
                borderRadius: '0.5rem',
            }}
        >
            <h1 className='mb-4' style={{ color: '#343a40' }}>Counter View React Redux</h1>
            <Row className='mb-4'>
                <Col xs={12} md={8} lg={6} className='mx-auto'>
                    <Card
                        style={{
                            backgroundColor: '#ffffff', // White background for card
                            border: '1px solid #ced4da', // Light border for the card
                            borderRadius: '0.5rem',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow for card
                            padding: '2rem',
                            minHeight: '250px',
                        }}
                    >
                        <Card.Body>
                            <Card.Title className='mb-3' style={{ color: '#495057' }}>
                                Counter Value
                            </Card.Title>
                            <Card.Text className='mb-4' style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                {count}
                            </Card.Text>
                            <Row className='justify-content-center'>
                                <Col xs="auto">
                                    <Button
                                        variant="primary"
                                        onClick={() => dispatch(increment())}
                                        className='mx-2'
                                    >
                                        Increment
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={() => dispatch(incrementByFive(5))}
                                        className='mx-2'
                                    >
                                        Increment 5
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => dispatch(decrement())}
                                        className='mx-2'
                                        disabled={count <= 0}
                                    >
                                        Decrement
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        onClick={() => dispatch(reset())}
                                        className='mx-2'
                                        disabled={count === 0}
                                    >
                                        Reset
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CounterView;
