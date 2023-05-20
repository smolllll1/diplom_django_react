import React, { Fragment, useState, useContext } from 'react';
import ButtonSend from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NotificationData } from '../data/notification-data';

const FormNotification = () => {

    const { formikNotification } = useContext(NotificationData)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const useStyleBtnContactUs = {
        btn: {
            backgroundColor: "floralwhite",
            color: 'red',
            textTransform: "capitalize",
            '&:hover': {
                backgroundColor: "red",
                color: "floralwhite"
            },
        }
    }

    return (
        <Fragment>
            <div className='d-flex my-3 justify-content-center'>
                <Button className="fs-5"
                    onClick={handleShow}
                    sx={useStyleBtnContactUs.btn}
                >
                    Contact Us
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formikNotification.handleSubmit}>
                        {/* Email input field */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Contact Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                autoFocus
                                value={formikNotification.values.email}
                                onChange={formikNotification.handleChange}
                                onBlur={formikNotification.handleBlur}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                name="subject"
                                placeholder="Enter your subject"
                                value={formikNotification.values.subject}
                                onChange={formikNotification.handleChange}
                                onBlur={formikNotification.handleBlur}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Email Content</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                type="text"
                                name="notification"
                                placeholder="Enter your notification"
                                value={formikNotification.values.notification}
                                onChange={formikNotification.handleChange}
                                onBlur={formikNotification.handleBlur}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonSend variant="primary" type="submit" onClick={handleClose}>
                        Send
                    </ButtonSend>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export { FormNotification };