import MainController from "./controllers/MainController.js";

// 컨트롤러 동작시점 설정( 돔컨텐츠가 로딩 되었을 때)
document.addEventListener('DOMContentLoaded', () =>{
  MainController.init()
})