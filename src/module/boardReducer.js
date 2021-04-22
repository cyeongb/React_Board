// action type
const MODE_REMOVE = "REMOVE";
const MODE_SAVE = "SAVE";
const MODE_SELECT_ROW = "SELECT_ROW";

//action function
// 게시판 글 저장
export const boardSave = (saveData) => ({
  type: MODE_SAVE,
  saveData: {
    boardId: saveData.boardId,
    boardTitle: saveData.boardTitle,
    boardContent: saveData.boardContent,
  },
});

// 게시판 글 삭제
export const boardRemove = (boardId) => ({
  type: MODE_REMOVE,
  boardId: boardId,
});

//게시판 글 선택
export const boardSelctRow = (boardId) => ({
  type: MODE_SELECT_ROW,
  boardId: boardId,
});

const initialState = {
  boards: [
    {
      boardId: 1,
      boardTitle: "제목1",
      boardContent: "제목1의 내용~~",
    },
    {
      boardId: 2,
      boardTitle: "제목2",
      boardContent: "제목2의 내용~~",
    },
    {
      boardId: 3,
      boardTitle: "제목3",
      boardContent: "제목3의 내용~~",
    },
    {
      boardId: 4,
      boardTitle: "제목4",
      boardContent: "제목4의 내용~~",
    },
  ],
  lastId: 4,
  selectRowData: {},
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case MODE_REMOVE:
      return {
        ...state,
        boards: state.boards.filter((row) => row.boardId !== action.boardId),
      };

    case MODE_SAVE:
      if (!action.saveData.boardId) {
        //boardId가 없으면 신규 save
        return {
          lastId: state.lastId + 1,
          boards: state.boards.concat({
            ...action.saveData,
            boardId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      }
      if (action.saveData.boardId) {
        // boardId가 있으면 기존 데이터 수정
        return {
          ...state,
          boards: state.boards.map((data) =>
            data.boardId === action.saveData.boardId
              ? { ...action.saveData }
              : data
          ),
          selectRowData: {},
        };
      }

    case MODE_SELECT_ROW:
      return {
        ...state,
        selectRowData: state.boards.find(
          (row) => row.boardId === action.boardId
        ),
      };

    default:
      return state;
  }
}
