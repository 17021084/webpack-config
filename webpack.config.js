const path = require('path')

module.exports = {

    // file sẽ đc chọn để build
    entry:{
        main: path.resolve(__dirname,'./src/index.js')
    },
    // nơi đc build ra
    output:{
        //folder đc build ra.
        path: path.resolve(__dirname,"./dist"),
        // filename 
        filename:'[name].bundle.js'

    }


}