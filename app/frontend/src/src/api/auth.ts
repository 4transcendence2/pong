import axios, { AxiosError } from "axios";

export async function existUsername(username: string) {
  try {
    const res = await axios.get(`/auth/exist/${username}`);
    return res;
  } catch (err: unknown) {
    if (err instanceof AxiosError && err.response) {
      console.error(err.response);
      return err.response;
    }
  }
}

export async function checkOtpLogin(OTP: string, token: string) {
  try {
    const res = await axios.post(
      `/auth/check/otp`,
      {
        otp: OTP,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err: unknown) {
    if (err instanceof AxiosError && err.response) {
      console.error(err.response);
      return err.response;
    }
  }
}

// export async function login(code: string) {
export async function login(username: string) {
  try {
    // const res = await axios.get(`/auth/login/${code}`);
    const res = await axios.post("/auth/login", {
      username: username,
    });
    return res;
  } catch (err: unknown) {
    if (err instanceof AxiosError && err.response) {
      if (err.response.status === 404) throw Error("존재하지 않는 유저입니다.");
      console.error(err.response);
      throw Error(err.response as unknown as string);
    }
  }
}

interface SignupProps {
  username: string;
  intraId: string;
}

export async function signup({ username, intraId }: SignupProps) {
  try {
    const res = await axios.post("/user/create", {
      username: username,
      intraId: intraId,
    });
    return res.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError && err.response) {
      console.error(err.response);
      return err.response;
    } else if (err instanceof AxiosError && err.code === "ERR_NETWORK") {
      throw Error("서버 점검 중 입니다 잠시 후 다시 접속해주세요.");
    } else {
      console.error(err);
    }
  }
}
