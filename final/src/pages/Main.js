import React from 'react';
import styled from 'styled-components';
import _ from "lodash"; // throttle, debounce 사용

import {Grid, Text, Button, Input} from '../elements/index';
import {actionCreators} from '../redux/modules/user';

import {history} from '../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {

    return (
        <React.Fragment>
            메인 페이지 입니다 :)
        </React.Fragment>
        );
}

export default Main;