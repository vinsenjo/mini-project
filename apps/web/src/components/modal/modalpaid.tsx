export default function ModalPaid() {
    return (
        <section>
            <button className="btn" onClick={() =>  (document.getElementById('my_modal_1') as HTMLFormElement).showModal()}>Paid</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                   
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </section>
    );
}
