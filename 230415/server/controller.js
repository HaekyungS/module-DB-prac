import http from "http";
import fs from "fs";
import qs from "querystring";
import dbConnection from "../modules/DB_connect.js";
import response from "../modules/response.js";

const page = fs.readFileSync("../page/index.html");
const pagejs = fs.readFileSync("../page/index.js");
const gogo = fs.readFileSync("../page/gogo.html");
const createDoc = fs.readFileSync("../modules/createDoc.js");

const server = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        response(res, "text/html", page);
        console.log("index.html 실행");
      } else if (req.url.includes("index.js")) {
        response(res, "text/javascript", pagejs);
        console.log("index.js 실행");
      } else if (req.url.includes("createDoc.js")) {
        response(res, "text/javascript", createDoc);
        console.log("createDoc.js 실행");
      }
    }
    if (req.method === "POST") {
      if (req.url.includes("gogo")) {
        let formdata = "";
        req.on("data", (data) => {
          formdata += data;
        });
        req.on("end", () => {
          fs.writeFileSync("./formdata.json", JSON.stringify(qs.parse(formdata,null,null)));
          dbConnection();
          response(res, "text/html", gogo);
        });
      }
    }
  })
  .listen(3333);
