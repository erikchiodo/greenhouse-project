import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

//TODO: Create form that will handle customer username/password submissions and use combination of mutation query and auth to add a new user to the database

