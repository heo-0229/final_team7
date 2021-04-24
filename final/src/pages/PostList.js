import React from 'react';
import styled from 'styled-components';
import {Grid, Text, Button, Input} from '../elements/index';

import {history} from '../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';



const PostList = () => {

    return (
    <React.Fragment>
        게시글 리스트 페이지 입니다 :)
        <Post/>
    </React.Fragment>
    );
}

export default PostList;