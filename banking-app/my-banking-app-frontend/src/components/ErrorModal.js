import '../model.css';
const ErrorModal = (props) => {
    return (
        <section>
            <div class="modal-container">
            <header>
                <h2>{props.title}</h2>
            </header>
            <div className='error-msg'>
                <p>{props.message}</p>
            </div>
            <footer className="modal-close">
                <button type="button" onClick={props.onClose} className='btn btn-danger'>close</button>
            </footer>
            </div>
        </section>
    )
}

export default ErrorModal;