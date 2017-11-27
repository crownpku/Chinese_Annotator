/**
 * Created by Littlepeer on 2017/11/11.
 */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }

})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js',
    counter: 1
  },
  // define methods under the `methods` object
  methods: {
    greet: function (event) {
      // Make a request for a user with a given ID
        axios.get('localhost:5000/')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
})



axios.defaults.baseURL = 'http://localhost:5000';
// axios.interceptors.request.use(
//   config =>{
//     config.data = JSON.stringify(config.data)
//     config.headers = {
//       'Content-Type':'application/json'
//     }
//     return config;
//   }
// );

var load_local_data = new Vue({
  el: '#load_local_data',
  data: {
    message: "load local test data",
    file_path: 'D:\\Github\\Chinese-Annotator\\chi_annotator\\data\\files\\spam_classify_chi_shuf.txt',
  },
  // define methods under the `methods` object
  methods: {
    load_local_data_post: function (event) {
      // Make a request for a user with a given ID
        axios.post('/load_local_dataset',{
          filepath:  this.file_path,
        })
        .then(function (response) {
          this.message = response.data.message
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    load_local_data_get: function (event) {
      // Make a request for a user with a given ID
        axios.get('/load_local_dataset?filepath=' + this.file_path)
        .then(function (response) {
          this.message = response.data.message
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
})