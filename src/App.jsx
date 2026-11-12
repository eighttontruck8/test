import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages 폴더에서 7개의 화면(컴포넌트)을 불러옵니다.
import Main from './pages/Main';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Register from './pages/Register';
import Match from './pages/Match';
import Room from './pages/Room';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path="주소"를 치면 element={<컴포넌트 />}를 보여주라는 명령어입니다 */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        
        {/* :id 는 나중에 1번공고, 2번방 등 변하는 숫자를 받기 위한 뚫린 구멍입니다 */}
        <Route path="/detail/:id" element={<Detail />} /> 
        
        <Route path="/register" element={<Register />} />
        <Route path="/match" element={<Match />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;