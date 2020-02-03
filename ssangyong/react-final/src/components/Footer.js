import React,{Component} from 'react'

class Footer extends Component{

    render(){
        return (
            <footer className="container-fluid text-center">
                <a href="#myPage" title="To Top">
                    <span className="glyphicon glyphicon-chevron-up"></span>
                </a>
                <p>SIST 강북쌍용교육센터</p>
            </footer>
        )
    }
}
export default Footer;