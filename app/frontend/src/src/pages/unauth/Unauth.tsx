import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "@unauth/signIn/SignIn";
import SignUp from "@unauth/signUp/SignUp";
import NotFound from "pages/NotFound";
import UnauthHome from "./signIn/UnauthHome";
import * as S from "./style";

function Unauth() {
  return (
    <S.AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnauthHome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </S.AppLayout>
  );
}

export default Unauth;
