import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './../../features/nav/NavBar';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDashboard from './../../features/events/eventDashboard/EventsDashboard';
import EventDetailedPage from './../../features/events/eventsDetailed/EventDetailedPage';
import EventForm from './../../features/events/eventForm/EventForm';
import Sandbox from './../../features/sandbox/Sandbox';
import ModalManager from './../common/modals/ModalManager';
import { ToastContainer } from 'react-toastify';
import ErrorComponent from '../common/error/ErrorComponent';

export default function App() {
  const { key } = useLocation();

  return (
    <>
    <ModalManager />
    <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route exact path='/sandbox' component={Sandbox} />
              <Route exact path='/events/:id' component={EventDetailedPage} />
              <Route
                exact
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
              <Route path='/error' component={ErrorComponent} />
            </Container>
          </>
        )}
      />
    </>
  );
}
