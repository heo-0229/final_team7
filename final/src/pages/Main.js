import React from "react";
import styled from "styled-components";
import _ from "lodash"; // throttle, debounce 사용

// component, element 파일들 가져오기
import SideNav from "../components/SideNav";
import LogBtn from "../components/LogBtn";
import {Grid, Text, Button, Input} from '../elements/index';

// 리덕스를 이용하게 해주는 함수들, 모듈 파일 가져오기
import { history } from '../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

// window 객체로부터 kakao mpa api를 호출하기
// index.html로의 script에 src에 apikey 값이 들어간 링크로 받아오는 것.
const { kakao } = window;  

const Main = () => {
  const [search, setSearch] = React.useState(""); // search가 변경 될때마다 화면 렌더링
  //조건 걸어주기 // 나를 기준으로 몇 km 이내

  const debounce = _.debounce((e) => {
    // 이래야 화면 렌더링이 계속안된다
    setSearch(e.target.value);
  }, 300); //키보드 떼면 입력한게 1초 뒤에 나타난다.

  React.useEffect(() => {
    // 지도 띄우기
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.526667, 127.028011), //지도 중심(시작) 좌표
      level: 3, //지도 확대 레벨
    };

    var map = new kakao.maps.Map(container, options); // 지도생성
    var markerPosition = new kakao.maps.LatLng(
      37.465264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 카테고리 별 검색 기능/////////////////////

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(`${search}`, placesSearchCB); // 여길 바꿔주면 검색이 된다

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [search]);

  return (
    <React.Fragment>
      <SearchBar>
        <input type="text" placeholder="지역으로 검색" onChange={debounce} />
      </SearchBar>
      <MapBox>
        <div>
          {/* <button
                    onClick={() => {
                      setSearch(search);
                    }}
                  >
                    검색하기
                  </button> */}
        </div>
        <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
      </MapBox>
    </React.Fragment>
  );
};

const SearchBar = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`; 

const MapBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default Main;
