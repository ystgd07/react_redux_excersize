import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");
  await pause(1000);
  return response.data;
});
// thunkcreate automatically create this
// 슬라이스에 생성된 청크를 가져다 쓸 수 있따!
// fetchUsers.pending==='users/fetch/pending'
// fetchUsers.fulfilled==='users/fetch/fulfiled'
// fetchUsers.rejected==='users/fetch/rejected'
//Dev only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { fetchUsers };
