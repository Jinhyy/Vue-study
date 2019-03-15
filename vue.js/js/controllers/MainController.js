import FormView from "../views/FormView.js";


const tag = '[MainController]' // 디버깅을 위하여 태그 설정,

/*
    실제 컨트롤러 구현
 */
export default {
    init(){
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))  // 일치하는 첫번째 form 클래스를 엘레멘트를 넘겨준다.
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())
        // @submit 태그라는 이벤트가 들어오면, 이벤트의 수행하라라고 등록(on)
    },
    
    onSubmit(input) {
        console.log(tag, 'onSubmit()', input)
    },

    onResetForm(){
        console.log(tag,'onResetForm')
    }
}