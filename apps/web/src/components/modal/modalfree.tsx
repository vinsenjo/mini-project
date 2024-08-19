export default function Free() {
    return (
        <section>
            <button className="btn" onClick={() =>  (document.getElementById('my_modal_1') as HTMLFormElement).showModal()}>Free</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </section>
    );
}

