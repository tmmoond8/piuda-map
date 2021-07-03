import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();

exports.handler = async function (event, context) {
  const { data } = await axios.get("https://api.picar.kr/api/article/list");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "map api",
      data: JSON.stringify(data),
    }),
  };
};
