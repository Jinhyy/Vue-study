new Vue ({
    el: '#app',// vue 인스턴스가 어느부분에 마운팅 될것인지 결정
    data: {
        query: ''   // 입력 데이터를 받아 저장
    },
    methods: {
        onSubmit(e) {
            debugger
        },
        onReset(e) {
            this.query=''
            // todo 검색결과를 숨겨야함.
            debugger
        },
        onKeyup(e) {
            if(this.query.length===0) this.onReset()
        }
    }
})