import {connect} from 'react-redux';
import Footer from '../components/footer';

const mapDispatchToProps = (dispatch)=>{
    return {
        filter:(filterName)=>{
            dispatch({type:'FILTER',filterName})
        }
    }
};

export default connect(()=>{return {}},mapDispatchToProps)(Footer);