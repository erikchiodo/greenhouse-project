import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

// TODO: create page that will allow user to place on order from shopping cart, display message thanking them for placing their order, and return them back to home page