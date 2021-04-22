import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../component/BoardList";
import Board from "../component/Board";
import { boardRemove, boardSave, boardSelctRow } from "../module/boardReducer";
const Container = () => {
  const [inputData, setInputData] = useState({
    boardId: "",
    boardTitle: "",
    boardContent: "",
  });

  const dispatch = useDispatch();

  // dispatch로 각 action을 보냅니다.
  // !!! action.type별로 action보내기 !!!
  const onRemove = (boardId) => dispatch(boardRemove(boardId));
  const onSave = (saveData) => dispatch(boardSave(saveData));

  // reducer 의 state의 selectRowData를 가져온뒤 subscribe 연결.
  // useSelector는 리덕스 store의 데이터를 가져올 수 있습니다.
  const { selectRowData } = useSelector((state) => state.boardReducer);

  // 글 클릭
  const onRowClick = (boardId) => {
    // !!! useCallback 사용하기 !!!
    dispatch(boardSelctRow(boardId));

    //input data에 selectRowData의 값을 반영합니다.
    if (JSON.stringify(selectRowData) !== "{}") {
      setInputData({
        boardId: selectRowData.boardId,
        boardTitle: selectRowData.boardTitle,
        boardContent: selectRowData.boardContent,
      });
    }
  };

  // 글 쓰기
  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // 리셋하기
  const resetForm = () => {
    setInputData({
      boardId: "",
      boardTitle: "",
      boardContent: "",
    });
  };

  // reducer state boards field를 가져온뒤 subscribe
  const { boards } = useSelector((state) => state.boardReducer);

  return <div></div>;
};

export default Container;
