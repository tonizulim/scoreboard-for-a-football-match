import './push_button.css';

function Push_button({label, action}){
    return(
        <>
            <button onClick={action}>{label}</button>
        </>
    )
}

export default Push_button;