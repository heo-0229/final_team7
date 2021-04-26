import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configureStore";
import "moment";
import moment from "moment";
import { config } from "../../shared/config";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";


const setPost = createAction(SET_POST, (post_list) => ({ post_list })); //paging은 나중에 넣기
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (like) => ({
  //   post_id, 서버 파라미터 값으로 대체
  like, // like: true or false 값과 like_cnt
  likeCnt,
}));
const deletePost = createAction(DELETE_POST, (id) => ({ id }));
const loading = createAction(LOADING, (post) => ({ post }));
const editLike = createAction(EDIT_LIKE, (post, post_id) => ({
  post,
  post_id,
}));

const initialState = {
  list: [], //post_list
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
  like: false,
};

const initialPost = {
  id: 1,
  writerName: "작성자 이름",
  writerImgUrl: "작성자 이미지",
  title: "abc",
  content: "abc",
  like: true,
  likeCount: 12,
  imgUrl: "vfsdsdf",
};

export default handleActions(
  {
    //애드 포스트는 간단하게 새로 받은 포스트를 리스트 맨앞에 삽입
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list); // 일단 서버에서 받아온거 이니셜 스테이트 리스트에 삽입

        //겹치는 게시물 중복 제거 과정
        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur]; //같은 id를 가진 게시물이 없다면 기존 포스트들과 새로받은 포스트 리턴
          } else {
            // 중복되는 id가 있다면? 포스트가 중복되서 출력되는 걸 막아줘야함
            acc[acc.findIndex((a) => a.id === cur.id)] = cur; //기존 리스트에서 새로받은 리스트와 같은 id가 있다면
            return acc; // 그 게시물은 새로 받은 게시물 => 그러므로 cur은 return 안해준다
          }
        }, []);
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((r, idx) => {
          if (r.id !== action.payload.id) {
            //서버에선 이미 지워져서 오지만 한번 더 중복검사
            // 현재 리스트에서 받은 포스트 id와 같은게 없다면?
            return [...draft.list, r]; // 그대로 출력
          }
        });
      }),
  },
  initialState
);
