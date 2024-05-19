export default function Header (){
    return(
        <>
            <div className="d-flex justify-content-between p-3">
                <div><h2 className="text-danger ms-5 ">NETFLIX</h2></div>
                <div className="input-group w-25">
                <select className="form-select">
                    <option>Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <button className="btn btn-danger text-white ms-2 me-3">
                    Sign in
                </button>
                </div>
            </div>
        </>
    )
}