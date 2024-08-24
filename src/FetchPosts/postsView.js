import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    // Select the posts state from the Redux store
    const { isLoading, error, posts } = useSelector((state) => state.posts);

    // Truncate text function
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <Container
            className='my-4'
            style={{
                backgroundColor: '#f8f9fa', // Light gray background
                padding: '2rem',
                borderRadius: '0.5rem',
            }}
        >
            <h1 className='text-center mb-4' style={{ color: '#343a40' }}>
                Posts View Fetching Data using Redux ToolKit
            </h1>
            {isLoading && (
                <div className='text-center'>
                    <Spinner animation="border" variant="primary" />
                </div>
            )}
            {error && (
                <Alert variant="danger" className='text-center'>
                    Error: {error}
                </Alert>
            )}
            <Row>
                {posts.map(post => (
                    <Col key={post.id} xs={12} sm={6} md={4} lg={3} className='mb-4'>
                        <Card
                            style={{
                                minHeight: '300px',
                                maxHeight: '300px',
                                overflow: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#ffffff', // White background for card
                                border: '1px solid #dee2e6', // Light border
                                borderRadius: '0.5rem',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
                                padding: '1rem',
                            }}
                        >
                            <Card.Header style={{ backgroundColor: '#e9ecef' }}>
                                <strong>User ID:</strong> {post.userId}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                {truncateText(post.title, 15)} {/* Adjust 100 to the desired length */}
                                </Card.Title>
                                <Card.Text>
                                    <strong>ID:</strong> {post.id}
                                </Card.Text>
                                <Card.Text>
                                    {truncateText(post.body, 60)} {/* Adjust 100 to the desired length */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PostsView;
