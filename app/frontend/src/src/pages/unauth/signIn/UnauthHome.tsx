import { RiPingPongFill } from "react-icons/ri";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { isAuth, setAuth } from "userAuth";
import { AuthContext } from "hooks/context/AuthContext";
import { login } from "api/auth";

export default function UnauthHome() {
  const navigate = useNavigate();
  const [input, setInput] = useState(""); // 테스트용
  const setSigned = useContext(AuthContext);
  // 테스트용
  const onInputHandler = (e: any) => {
    setInput(e.target.value);
  };

  //테스트용
  // const testCreateUserHandler = async () => {
  //   const res = await axios.get(
  //     `http://${import.meta.env.VITE_SERVER_IP}:81/user/create/test`
  //   );
  //   console.log(res);
  // };
  // const testLoginHandler = async () => {
  //   const res = await axios.post(
  //     `http://${import.meta.env.VITE_SERVER_IP}:81/auth/login/test`,
  //     {
  //       username: input,
  //     }
  //   );
  //   if (setSigned) setSigned(true);
  //   setAuth({
  //     username: input,
  //     token: res.data.accessToken,
  //   });
  //   console.log(res);
  //   navigate("/");
  // };

  // const startHandler = () => {
  //   navigate("/signin");
  // };

  async function onTestLogin(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      const res = await login(input);
      setAuth({
        username: input,
        token: res?.data?.accessToken,
      });
      setSigned && setSigned(true);
      navigate("/");
    } catch (err) {
      if (err && err instanceof Error) alert(err.message);
    }
  }

  return (
    <S.SignInLayout>
      <S.FormLogo>
        <RiPingPongFill size={55} />
      </S.FormLogo>
      <h1>Hello pongpong</h1>
      {/* <S.Button onClick={startHandler}>시작하기</S.Button> */}
      <S.BtnWrapper>
        <S.Input onChange={onInputHandler} />
        <S.Button onClick={onTestLogin}>로그인</S.Button>
      </S.BtnWrapper>
      <S.BtnWrapper>
        <S.Button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          가입하기
        </S.Button>
      </S.BtnWrapper>
      {/* <S.BtnWrapper>
        <S.Button onClick={testCreateUserHandler}>테스트용 아이디만들기</S.Button>
        <S.Input onChange={onInputHandler} />
        <S.Button onClick={testLoginHandler}>테스트용 로그인</S.Button>
      </S.BtnWrapper> */}
    </S.SignInLayout>
  );
}
