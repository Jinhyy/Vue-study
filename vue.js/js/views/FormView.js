import View from "./View.js";

const tag = '[FormView]'

const FormView = Object.create(View) // view 객체 복사하여 객체 만든다.

FormView.setup = function (el) {    // html 엘레멘트 받아서 속성으로 갖게한다.
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')  // input 엘레멘트 찾는다.
    this.resetEl = el.querySelector('[type=reset]') // reset 엘레멘트 검색
    this.bindEvent() // 키가 입력되는 이벤트를 처리하는 핸들러를 실행해준다.
    this.showResetBtn(false)    // 처음에 reset 버튼 보이게한다.
    return this
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'   // show가 참이면 block 아니면 none
}

// 이벤트 리스너 적용. keyup 이벤트가 발생하면, e라는 핸들러가 작동
FormView.bindEvent = function () {
    this.on('submit', e=> e.preventDefault())
    // input 엘리먼트에서 엔터키는 폼전송을 위해 화면 갱신이 이뤄지는데 이걸 e.preventDefault() 함수로 방지
    this.inputEl.addEventListener('keyup', e => this.onKeyUp(e))
    this.resetEl.addEventListener('click', e =>this.onClickReset())
}

/*
    1. 검색어가 있을 경우에만 X버튼 보이게 한다.
    2. 엔터키가 입력됬을 경우 검색결과를 다른 컨트롤러에 인풋값을 보내준다.
 */
FormView.onKeyUp = function (e) {

    const enter = 13    // enter키는 13임.
    this.showResetBtn(this.inputEl.value.length)
    if(!this.inputEl.value.length) this.emit('@reset')
    if (e.keyCode !== enter) return
        this.emit('@submit', {input: this.inputEl.value})
        // @submit 라는 이벤트태그로 input 데이터를 넘겨준다.
}

FormView.onClickReset= function () {
   this.emit('@reset')
    this.showResetBtn(false)
}


export default FormView