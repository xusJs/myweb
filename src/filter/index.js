import Vue from 'vue'

Vue.filter('YearDate', function (str) {
  if (str) {
    var d = new Date(str)
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
    var hour = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    // return hour + ':' + minutes + ':' + seconds
    return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes + ':' + seconds
  } else {
    return ''
  }
})
