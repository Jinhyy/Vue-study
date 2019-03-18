import View from "./View.js";

const tag ='[KeywordView]'

const KeywordView=Object.create(View)

KeywordView.messages = {
    'NO_RESULT' : "추천 검색어가 없습니당."
},

KeywordView.setUp = function (el) {
    this.init(el)
    return this
},

KeywordView.render = function(data = []){
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : this.messages.NO_RESULT
    this.bindClick()
    this.show()
    return this
},

KeywordView.bindClick = function(){
    Array.from(this.el.querySelectorAll('li')).forEach(li=> {
        li.addEventListener('click', e=> this.onClickKeyword(e))
    })
},

//keyword 변수 객체에 전달받은 event.currentTarget.dataset을 받는다.
KeywordView.onClickKeyword = function (e) {
    const {keyword}= e.currentTarget.dataset
    this.emit('@click',{keyword})
},

KeywordView.getKeywordsHtml = function (data) {
    return data.reduce((html, item, index) => {
      html += `<li data-keyword="${item.keyword}"><span class="number">${index + 1}</span>${item.keyword}</li>`
      return html
    }, '<ul class="list">') + "</ul>"
  }

export default KeywordView