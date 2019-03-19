const tag = '[View]'

// ES6의 모듈 패턴, export default로 객체를 export 한다.
// 아래부터는 view 객체의 메소드들이 정의 되있다.
export default {
  // el을 주입받아 자신의 property로 갖게 한다.
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  // 특정 이벤트가 발생했을 시 핸들러가 발생하게 한다.
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  // 이벤트 객체를 만들어 방출하는 메소드
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)  // 만든 evt 객체를 html 엘리멘트의 dispatchEvent 메소드로 넘겨주어 수행.
    return this
  },

  // 스타일 파일의 display속성 설정.
  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}