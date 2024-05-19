export default function Netflix(){
    return (
        <div>
            <h1 className="fw-bold me-5">Unlimited movies, TV shows and more</h1>
            <p className="fs-2">Watch anywhere. Cancel anytime.</p>
            <p className="fs-5">Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
            <div className="d-flex justify-content-center">
            <div className="input-group input-group-lg w-50 me-5">
            <input type="email" className="form-control text-white" placeholder="Email or mobile number" />
            <button className="btn btn-danger ms-3">
                Get Started  <span className="bi bi-chevron-right text-white"></span>
            </button>
            </div>
            </div>

        </div>
    )
}