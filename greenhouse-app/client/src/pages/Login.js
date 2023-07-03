import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

//TODO: Create form that will handle customer username/password submissions and use combination of mutation query and auth to valid user's login