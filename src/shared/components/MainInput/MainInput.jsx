import './MainInput.css'

function MainInput() {
    return (
        <div className="inputGroup">
            <input type="text" id="name" required autoComplete="off" />
            <label htmlFor="name">상담을 시작해 보세요.</label>
        </div>
    );
}

export default MainInput;

