import View from "./View.js";

const tag ='[ResultView]'

const ResultView=Object.create(View)

ResultView.setUp = function (el) {
    this.init(el)
}

// 서버에서 받은 데이터를 받아 동적으로 dom을 그려주는 메소드
ResultView.render = function (data= []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : ' 검색 결과가 없습니다.'
}

ResultView.getSearchResultsHtml= function (data) {
    debugger    // 데이터를 받고 디버거 호출
}

export default ResultView