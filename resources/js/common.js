export default{
    data(){
        return{

        }
    },
    methods:{
       async callApi(method, url, dataObj){
            try {
                // Send a POST request
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj
            });
            } catch (error) {
                return error.response
            }
        },

        info (desc, title='Hey.!') {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        success (desc, title='Great.!') {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        warning (desc, title='Opps.!') {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        error (desc, title='Error.!') {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }
    }
}