import View from "./View.js";

const tag ='[ResultView]'

const ResultView=Object.create(View)

ResultView.messages ={
    NO_RESULT : '검색 결과가 없습니다.'
}
ResultView.setUp = function (el) {
    this.init(el)
}

// 서버에서 받은 데이터를 받아 동적으로 dom을 그려주는 메소드
ResultView.render = function (data= []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT
    this.show()
}

// data가 컬렉션이므로 reduce함수로 html형식으로 표현
ResultView.getSearchResultsHtml= function (data) {
    return data.reduce((html,item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

//  li 생성하는 함수, SearchModel에서 가져왔기 떄문에 이렇게 사용가능.
ResultView.getSearchItemHtml = function (item) {
    return `<li>
    <img src="${item.image}">
    <p>${item.name}</p>
    </li>`
}
export default ResultView