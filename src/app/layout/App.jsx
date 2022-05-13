import React from 'react';
import { Container, Modal } from 'semantic-ui-react';
import NavBar from './../../features/nav/NavBar';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDashboard from './../../features/events/eventDashboard/EventsDashboard';
import EventDetailedPage from './../../features/events/eventsDetailed/EventDetailedPage';
import EventForm from './../../features/events/eventForm/EventForm';
import Sandbox from './../../features/sandbox/Sandbox';
import ModalManager from './../common/modals/ModalManager';

export default function App() {
  const { key } = useLocation();

  return (
    <>
    <ModalManager />
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
            </Container>
          </>
        )}
      />
    </>
  );
}
