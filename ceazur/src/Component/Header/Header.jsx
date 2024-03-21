import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/slice/AuthSlice';
// import axios from 'axios';

// bootstrap
import { Navbar, Container, Form, Button, Col, Dropdown } from "react-bootstrap";

// Mui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
      const { isAuthenticated } = useSelector((state) => state.auth);
      const dispatch = useDispatch();

      const handleLogout = () => {
            dispatch(logout());
      };

      return (
            <>
                  <Navbar className="bg-body-tertiary" >
                        <Container className="bg-body-tertiary">
                              <Col className="bg-body-tertiary">
                                    <Navbar.Brand href="/" className='bg-body-tertiary'>Ceazur</Navbar.Brand>
                              </Col>
                              <Col className="d-flex justify-content-center bg-body-tertiary">
                                    <Form className='d-flex align-items-center rounded-pill border bg-body-tertiary'>
                                          <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="border-0 rounded-pill"
                                                aria-label="Search"
                                          />
                                          <Button variant="link" className='border-0 bg-transparent '>
                                                <SearchIcon className='bg-body-tertiary' />
                                          </Button>
                                    </Form>
                              </Col>

                              <Col className="bg-body-tertiary">
                                    <Navbar.Collapse className="justify-content-end">
                                          <div className='d-flex gap-3 '>

                                                {isAuthenticated ? (
                                                      <>
                                                            <Dropdown>
                                                                  <Dropdown.Toggle className='m-0 p-0 bg-transparent border-0' >
                                                                        <AccountCircleIcon style={{ color: "black" }} />
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu>
                                                                        <Dropdown.Item href="/account">Profile</Dropdown.Item>
                                                                        <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                            </Dropdown>
                                                      </>

                                                ) : (
                                                      <a href='/login' className='bg-body-tertiary'>Login</a>
                                                )}
                                                <a href="/wishlist" ><FavoriteIcon /></a>
                                                <a href='/cart'><ShoppingCartIcon /></a>

                                          </div>
                                    </Navbar.Collapse>
                              </Col>
                        </Container>
                  </Navbar>
            </>
      );
}

export default Header;
