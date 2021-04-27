import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from '../redux/modules/user';

const EditProfile = () => {
    const dispatch = useDispatch();

    return "프로필 편집 페이지 입니다 :)";
}

export default EditProfile;