import SearchModel from "../models/SearchModel.js"

new Vue ({
    el: '#app',// vue 인스턴스가 어느부분에 마운팅 될것인지 결정
    data: {
        query: '',   // 입력 데이터를 받아 저장
        searchResult: [],    // 검색결과 데이터를 저장
        submitted: false
    },
    methods: {
        onSubmit(e) {
            this.search()
            this.submitted=true
        },
        onReset(){
            this.query=''
            this.submitted=false
            this.searchResult=[]
        },
        onResetClicked(e) {
            this.onReset()
        },
        onKeyup(e) {
            if(this.query.length===0) this.onReset()
        },
        search() {
            SearchModel.list().then(data => {
                this.searchResult = data
            })
        }
    }   
})