import React from 'react';
import styled from 'styled-components';

import {Grid, Text, Button, Input} from '../elements/index';
import {actionCreators} from '../redux/modules/user';

import {history} from '../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {

    return (
        <React.Fragment>
            회원가입 페이지 입니다 :)
        </React.Fragment>
        );
}

export default Signup;